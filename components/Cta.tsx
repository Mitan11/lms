import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cta() {
    return (
        <section className='cta-section'>
            <div className='cta-badge'>
                Start learning your way.
            </div>
            <h2 className='text-3xl font-bold'>Build and Personalized Learning Companion</h2>
            <p>Pick a subject, voice & personality - and start learning through voice conversations that feel natural and fun.</p>
            <Image src={'images/cta.svg'} alt={'atc'} width={362} height={232} />
            <button className='btn-primary'>
                <Image src={'/icons/plus.svg'} alt='plus' width={12} height={12} />
                <Link href={"/companions/new"} ><p>Build a new Companions</p></Link>
            </button>
        </section>
    )
}

export default Cta