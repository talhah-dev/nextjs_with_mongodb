import { NextResponse } from "next/server";
import User from "../../../../Models/User";
import mongooseConnection from "../../../../lib/mongooseConnection";

export async function POST(req) {
    try {
        await mongooseConnection()
        const { name, email } = await req.json()
        const user = new User({ name, email })
        await user.save()
        return NextResponse.json({ message: "User created successfully", user }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
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