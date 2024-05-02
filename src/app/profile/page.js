'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"



const ProfilePage = () => {
    const {data : session, status} = useSession()
    const [userName, setUserName] = useState('')
    const [saved, setSaved] = useState(false)
    const [saving, setSaving] = useState(false)
    

    useEffect(() => {
        if(status == 'authenticated'){
            setUserName(session.user.name)
        }
    }, [session, status])

    if(status == 'unauthenticated'){
        return redirect('/login')
    }
    if(status == 'loading'){
        return <p>Loading...</p>
    }
    const userImage = session.user.image

    async function handleProfileUpdate(e){
        e.preventDefault()
        setSaved(false)
        setSaving(true)
        const response = await fetch('/api/profile', {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: userName,
            })
        })
        setSaving(false)
        if(response.ok){
            setSaved(true)
        }
    }
    
    async function handleFileChange(e){
        const file = e.target.files[0];
        if(file){
            const data = new FormData
            data.set('file' , file)
            const response = await fetch('/api/upload', {
                method: 'POST',
                body : data,
                
            })
        }
    }

  return (
    <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-4'>
            Profile
        </h1>
        <div className=" max-w-md mx-auto">
        {saved && (
            <h2 className="text-center bg-green-100 p-4 rounded-lg border border-green-300">Profile Saved</h2>
        )}
            {
                saving && (
                    <h2 className="text-center bg-blue-100 p-4 rounded-lg border border-blue-300">Saving...</h2>
                )
            }
            <div className="flex gap-4 items-center">
                <div>
                <div className=" p-2 rounded-lg relative">
                    <Image className="rounded-lg w-full h-full mb-1" src={userImage} width={250} height={250} />
                    <label>
                        <input type="file" hidden onChange={handleFileChange}/>
                        <span className="block p-2 cursor-pointer rounded-lg text-center border border-gray-300">Edit</span>
                    </label>
                    
                </div>
                
                </div>
                <form className="grow" onSubmit={handleProfileUpdate}>
                    <input type="text" placeholder="First and Last Name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    <input type='email' disabled={true} value={session.user.email} />
                    <button type="submit">Save</button>
                </form>
                
            </div>
        </div>
    </section>
  )
}

export default ProfilePage