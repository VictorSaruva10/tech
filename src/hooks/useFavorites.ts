
import { useState, useEffect } from 'react'

export const useFavorites = (storageKey: string) => {
  const [favorites, setFavorites] = useState<number[]>([])

  // Carregar favoritos do localStorage na inicialização
  useEffect(() => {
    const savedFavorites = localStorage.getItem(storageKey)
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites))
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error)
        setFavorites([])
      }
    }
  }, [storageKey])

  // Salvar favoritos no localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favorites))
  }, [favorites, storageKey])

  const addFavorite = (id: number) => {
    setFavorites(prev => {
      if (!prev.includes(id)) {
        return [...prev, id]
      }
      return prev
    })
  }

  const removeFavorite = (id: number) => {
    setFavorites(prev => prev.filter(fav => fav !== id))
  }

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  const isFavorite = (id: number) => favorites.includes(id)

  const clearAllFavorites = () => {
    setFavorites([])
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    favoritesCount: favorites.length
  }
}
