"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Particle Constellation
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 80 : 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Palette: Violet (#8b5cf6), Magenta (#d946ef), Hot Pink (#ec4899), Peach (#fb923c)
    const colorPalette = [
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#d946ef"),
      new THREE.Color("#ec4899"),
      new THREE.Color("#fb923c"),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle Material with Soft Glowing Circle
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.3, "rgba(255,255,255,0.7)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: isMobile ? 2.5 : 3.2,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle Geometric Wireframe Icosahedron Cluster
    const icoGeometry = new THREE.IcosahedronGeometry(22, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    icoMesh.position.set(30, -5, -10);
    scene.add(icoMesh);

    const icoInnerGeom = new THREE.IcosahedronGeometry(12, 0);
    const icoInnerMat = new THREE.MeshBasicMaterial({
      color: 0xfb923c,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const icoInner = new THREE.Mesh(icoInnerGeom, icoInnerMat);
    icoInner.position.set(30, -5, -10);
    scene.add(icoInner);

    // Mouse Tracking with Inertia
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      camera.position.x = currentX * 12;
      camera.position.y = -currentY * 12;
      camera.lookAt(0, 0, 0);

      // Particle rotation & gentle floating
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1;

      // Polyhedral mesh rotations
      icoMesh.rotation.x = elapsedTime * 0.1;
      icoMesh.rotation.y = elapsedTime * 0.15;
      icoInner.rotation.x = -elapsedTime * 0.15;
      icoInner.rotation.y = -elapsedTime * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      icoInnerGeom.dispose();
      icoInnerMat.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
