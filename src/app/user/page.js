"use client"
import React from 'react';
import UserComponent from "@/components/UserComponent";
import {getUserDetail} from "@/app/userdetails/[id]/page";

export async function getUserData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=9")
    const data = await res.json();
    return data;
}

export default async function Page() {
const  users = await getUserData()
console.log(users)
    return (
        <div>
            <div className={"flex min-h-screen flex-wrap items-center justify-between container mx-auto p-24 gap-y-20 gap-8"}>
                {users.map((user) => (
                    <UserComponent
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        avatar={user.avatar}
                        role={user.role}
                    />
                ))}
            </div>
        </div>
    );
}

