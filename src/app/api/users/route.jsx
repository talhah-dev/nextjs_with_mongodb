import { NextResponse } from "next/server";
import User from '../../../../Models/User'
import mongooseConnection from '../../../../lib/mongooseConnection'

export async function POST(req) {
    try {
      console.log('🔁 Connecting to MongoDB...')
      await mongooseConnection()
  
      const body = await req.json()
      console.log('✅ Received body:', body)
  
      const { name, email } = body
      const user = new User({ name, email })
  
      await user.save()
      console.log('✅ User saved:', user)
  
      return NextResponse.json({ message: 'User created', user }, { status: 201 })
    } catch (err) {
      console.error('❌ POST /api/users error:', err)
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
  }
  


export async function GET(req) {
    try {
        await mongooseConnection()
        const users = await User.find()
        return NextResponse.json({ users }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}