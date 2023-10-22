import Image from 'next/image'

const ProfilePic = () => {
    return (
        <section>
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src='/images/pexels-mike-bird-350784.jpg'
                alt='Houssem Amara'
                width="200"
                height="200"
                priority={true}
            />

        </section>
    )
}

export default ProfilePic
