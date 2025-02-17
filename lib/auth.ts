import { auth } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    console.error("Authentication error:", error)
    throw error
  }
}

export async function signOut() {
  try {
    await auth.signOut()
  } catch (error) {
    console.error("Sign out error:", error)
    throw error
  }
}

