'use client'
import React from 'react'
import { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

import Link from 'next/link'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function FilteringCards() {

    const [filter,SetFilter] = useState("marketing");

      
        const cards = {

            marketing:[
                {
                    title:"Gozen Optinly",
                    desc:"Engage your audience with strategic popup personalized for your use case",
                    icon:"📢"
                },

                {
                    title:"Gozen Forms",
                    desc:"An AI powered no code form builder to collect feedback via forms,polls and surveys",
                    icon:"📢"
                },
                
                   {
                    title:"Gozen Engage",
                    desc:"A Gamified ecommerce friendly lead generation platform",
                    icon:"📢"
                },
                {


                    title:"Gozen Notify",
                    desc:"A Push Notification Software that boosts customer engagement and retention",
                    icon:"📢"

                },

                {
                    title:"Content AI",
                    desc:"An AI powered content creator that assists you in creating high-quality SEO content and copywriting",
                    icon:"📢"
                }

            ],

            sales:[

                {

                    title:"Hyper Reach",
                    desc:"Any Website visitor identification and linked in based outreach personalization platform identity warm leads and hyper targeting",
                    icon:"📧"
                },
                {

                    title:"Testimonials",
                    desc:"Collect and transform text,audio, video reviews in powerful social proof",
                    icon:"📧"
                },
                {

                    title:"GoZen Growth",
                    desc:"Cold outreach and email automation platform to streamline lead generation personalize outreach and convert prospects effortlessly",
                    icon:"📧"
                }


            ],
            support:[

                {
                    title:"Deep Agent",
                    desc:"Ai agent builder that supports automation to customer support,sales",
                    icon:"📊"
                }
            ]

}
  return (
    <>

       <main className='p-10'>

           
            {/* <div  className='flex justify-center  items-center gap-5 w-full py-10 '>
                <ButtonGroup className='flex justify-evenly items-center gap-5 w-1/3'>
                <Button className='bg-blue-600 text-white px-4 py-2' onClick={()=>SetFilter("marketing")}>Marketing</Button>
                <Button   className='bg-blue-600 text-white px-4 py-2' onClick={()=>SetFilter("sales")}>Sales</Button>
                <Button  className='bg-blue-600 text-white px-4 py-2' onClick={()=>SetFilter("support")}>Support</Button>
                </ButtonGroup>
            </div>  */}


             <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full p-1 shadow-md px-5" data-aos="fade-right" data-aos-duration="2000">
            {["marketing", "sales", "support"].map((tab) => (
              <button
                key={tab}
                onClick={() => SetFilter(tab)}
                className={`px-6 py-2 rounded-full capitalize transition ${
                  filter === tab
                    ? "bg-blue-500 text-white"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

                <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mt-6">
                 {cards[filter].map((card, index) => (
                    <Card key={index} className=' group hover:bg-blue-500 py-5 hover:text-white transition duration-300'>
                        <CardHeader  className="group-hover:text-white ">
                     <CardTitle className='font-bold text-2xl'>
                        <span>{card.icon}</span>
                        <p>{card.title}</p>
                     </CardTitle>
                    </CardHeader>
                    <CardContent  className="group-hover:text-white">

                        <CardDescription  className="group-hover:text-white py-5" >{card.desc}</CardDescription>
                        <Link href="#">Learn More</Link>
                    </CardContent>
                   
                    </Card>
  ))}
</div>   


               

                
       </main>


    
    </>
  )
}

export default FilteringCards