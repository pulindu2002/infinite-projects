import React from 'react'

const Settings = () => {
  return (
    <div className='p-5'>

        <button className='px-4 bg-slate-500'> - Back</button>

        <main className='w-10/12 h-[500px] bg-slate-800 mx-auto mt-5 flex justify-between'>
            <section className=''>Sidebar Type</section>
            <section className='flex gap-'>
                <div>
                    standard
                </div>

                <div>
                    collapse
                </div>
            </section>
        </main>
    </div>
  )
}

export default Settings