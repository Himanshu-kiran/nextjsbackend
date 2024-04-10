import { PrismaClient } from "@prisma/client/edge";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {
    const user = await client.user.findFirst();
    return NextResponse.json({
        email: "Himanshu@gmail.com",
        name: "hkiran"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        await client.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        })
        return NextResponse.json({
            body
        })
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            msg: "Error while signing up"
        }, {
            status: 411
        })
    }

}