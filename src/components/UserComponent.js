"use client";
import React from 'react';
import {Button, Card, Dropdown} from "flowbite-react";
import {getUserDetail} from "@/app/userdetails/[id]/page";
import Image from "next/image";

export default function UserComponent({id, name, avatar, role}) {
    return (
        <div>
            <div className="max-w-sm w-80">
                <Card>
                    <div className="flex flex-col items-center ">
                        <Image unoptimized  width={300} height={300}
                            className="mb-3 h-24 w-24 "
                            src={avatar ? avatar : "https://flowbite.com/docs/images/people/profile-picture-3.jpg"}
                        />

                        <h5 className="mb-1 text-xl  dark:text-white">{name ? name : "Name"}</h5>
                        <div className="mt-4 flex  lg:mt-6">
                            <Button   >
                                <a href={`/userdetails/${id}`}> View User </a>
                            </Button>

                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
