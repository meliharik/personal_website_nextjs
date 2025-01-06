'use client'

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const scale = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * scale
      canvas.height = window.innerHeight * scale
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(scale, scale)
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Daha fazla ve daha büyük gradient noktaları
    let points = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5, // Hızı artırdık
      vy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 400 + 200 // Değişken boyutlar
    }))

    const animate = () => {
      // Daha belirgin iz bırakması için opaklığı azalttık
      ctx.fillStyle = 'rgba(0, 0, 0, 0.015)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      points = points.map(point => {
        point.x += point.vx
        point.y += point.vy

        if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1
        if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1

        return point
      })

      points.forEach(point => {
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.size
        )
        
        // Daha canlı renkler
        gradient.addColorStop(0, 'rgba(76, 29, 149, 0.15)') // Mor
        gradient.addColorStop(0.4, 'rgba(124, 58, 237, 0.1)') // Açık mor
        gradient.addColorStop(0.8, 'rgba(67, 56, 202, 0.05)') // Mavi
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full bg-black opacity-80"
      style={{ filter: 'blur(30px)' }} // Daha yumuşak görünüm
    />
  )
}

export default AnimatedBackground 