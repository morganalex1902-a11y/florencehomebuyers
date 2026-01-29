'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'

interface VideoModalProps {
  isOpen: boolean
  videoUrl: string
  title?: string
  onClose: () => void
}

export function VideoModal({ isOpen, videoUrl, title, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Check if URL is YouTube or Vimeo
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')
  const isVimeo = videoUrl.includes('vimeo.com')

  let embedUrl = videoUrl
  if (isYouTube) {
    const videoId = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
    embedUrl = `https://www.youtube.com/embed/${videoId}`
  } else if (isVimeo) {
    const videoId = videoUrl.match(/vimeo\.com\/(\d+)/)?.[1]
    embedUrl = `https://player.vimeo.com/video/${videoId}`
  }

  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50' onClick={onClose}>
      <div className='relative w-full max-w-4xl mx-auto px-4' onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className='absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors'
          aria-label='Close video'
        >
          <X className='w-6 h-6' />
        </button>

        <div className='relative w-full bg-black rounded-lg overflow-hidden' style={{ paddingBottom: '56.25%' }}>
          {isYouTube || isVimeo ? (
            <iframe
              src={embedUrl}
              title={title || 'Video player'}
              className='absolute inset-0 w-full h-full border-0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          ) : (
            <video
              src={videoUrl}
              className='absolute inset-0 w-full h-full'
              controls
              autoPlay
            />
          )}
        </div>
      </div>
    </div>
  )
}
