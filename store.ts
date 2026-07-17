"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User, ChatMessage, Companion, Achievement, Mission, Notification } from "@/types"

interface AppState {
  // User
  user: User | null
  setUser: (user: User | null) => void

  // Companion
  companion: Companion | null
  setCompanion: (companion: Companion | null) => void

  // Chat
  messages: ChatMessage[]
  addMessage: (message: ChatMessage) => void
  clearMessages: () => void

  // UI
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  activeTab: string
  setActiveTab: (tab: string) => void

  // Gamification
  achievements: Achievement[]
  setAchievements: (achievements: Achievement[]) => void
  unlockAchievement: (id: string) => void

  missions: Mission[]
  setMissions: (missions: Mission[]) => void
  completeMission: (id: string) => void

  // Notifications
  notifications: Notification[]
  addNotification: (notification: Notification) => void
  markAsRead: (id: string) => void
  clearNotifications: () => void

  // Settings
  settings: {
    soundEnabled: boolean
    notificationsEnabled: boolean
    autoSave: boolean
    theme: "dark" | "light" | "system"
    language: string
  }
  updateSettings: (settings: Partial<AppState["settings"]>) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),

      companion: null,
      setCompanion: (companion) => set({ companion }),

      messages: [],
      addMessage: (message) => set((state) => ({ 
        messages: [...state.messages, message] 
      })),
      clearMessages: () => set({ messages: [] }),

      sidebarOpen: true,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),

      activeTab: "home",
      setActiveTab: (tab) => set({ activeTab: tab }),

      achievements: [],
      setAchievements: (achievements) => set({ achievements }),
      unlockAchievement: (id) => set((state) => ({
        achievements: state.achievements.map((a) =>
          a.id === id ? { ...a, unlockedAt: new Date() } : a
        ),
      })),

      missions: [],
      setMissions: (missions) => set({ missions }),
      completeMission: (id) => set((state) => ({
        missions: state.missions.map((m) =>
          m.id === id ? { ...m, completed: true } : m
        ),
      })),

      notifications: [],
      addNotification: (notification) => set((state) => ({
        notifications: [notification, ...state.notifications],
      })),
      markAsRead: (id) => set((state) => ({
        notifications: state.notifications.map((n) =>
          n.id === id ? { ...n, read: true } : n
        ),
      })),
      clearNotifications: () => set({ notifications: [] }),

      settings: {
        soundEnabled: true,
        notificationsEnabled: true,
        autoSave: true,
        theme: "dark",
        language: "en",
      },
      updateSettings: (newSettings) => set((state) => ({
        settings: { ...state.settings, ...newSettings },
      })),
    }),
    {
      name: "nova-ai-storage",
      partialize: (state) => ({
        settings: state.settings,
        companion: state.companion,
      }),
    }
  )
)

export const useUser = () => useAppStore((state) => state.user)
export const useCompanion = () => useAppStore((state) => state.companion)
export const useMessages = () => useAppStore((state) => state.messages)
export const useAchievements = () => useAppStore((state) => state.achievements)
export const useMissions = () => useAppStore((state) => state.missions)
export const useNotifications = () => useAppStore((state) => state.notifications)
export const useSettings = () => useAppStore((state) => state.settings)
