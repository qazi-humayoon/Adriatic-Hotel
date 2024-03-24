import React from 'react'

function Home() {
    return (
        <div className='bg-gray-200'>
            <div>
            <img className='w-full h-[800px] object-cover' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="home"/>


        <div className='absolute top-40 text-white left-32 font-semibold'>
            <p className='text-xs font-semibold '>C R O A T I A ' S---------- F I N E S T ----------  H O T E L ----------C O L L E C T I O N </p>
            <p className='text-8xl font-thin mt-10'>ADRIATIC <br /> LUXURY <br /> HOTELS</p>
            <p className='text-xs font-semibold mt-9'>VIEW  OUR  LATEST OFFERS <i class="ri-arrow-right-circle-line text-3xl ml-2 text-red-500 font-light cursor-pointer hover:font-semibold"></i></p>
            </div>
            </div>

            <div className='mt-32 ml-44 leading-snug  text-3xl font-thin'>
                <p>Adriatic Luxury Hotels is a collection of the finest <br /> independent luxury hotels in Dubrovnik, Croatia. <br /> Find out more!</p>
            </div>

            <div className='flex flex-wrap items-center justify-center mt-36 ml-[350px] font-light'>
                <p>Glorious views of the crystal-clear waters of the Adriatic <br /> Sea come as standard in all of our five-star hotels and <br /> luxury villas. Alongside stunning seaside locations, <br /> effortlessly elegant interiors and impeccable service – <br /> including the assistance of our knowledgeable concierges<br />  – you can look forward to a stylish selection of destination <br /> bars and restaurants, luxury spas, boutiques, and even a <br /> PADI dive centre.</p>

                <p className='ml-16'>Our suites of contemporary conference centres are both <br /> impressive and flexible. Plush interior design, swathes of <br />natural sunlight and picture – perfect panoramas of the <br /> sea make them just as popular a choice for weddings and <br /> other tailor-made events as for business. Book your <br /> holiday or event with us – and check our special offers – <br /> to experience the very best the Adriatic coast has to offer. <br /> Find out more at reservations@alh.hr or +385 20 300 300.</p>
            </div>

            <div className='flex items-center justify-end mt-24'>
                <div  className='bg-slate-300 p-[140px] mt-[100px] rounded-2xl font-light leading-loose'>
                <p className='text-xs mb-7'>D U B R O V N I K </p>
                <p>Poised on the Dalmatian coast overlooking the astonishingly clear<br /> blue waters of the Adriatic, Dubrovnik is one of the world’s most<br /> magnificent walled cities. Known as the Pearl of the Adriatic It lies<br /> to the extreme south of Croatia, basking in glorious Mediterranean<br /> sunshine for much of the year.</p>
                <p className='text-xs font-semibold mt-7'>MORE ABOUT DUBROVNIK <i class="ri-arrow-right-circle-line text-3xl font-thin text-red-500 ml-2 cursor-pointer hover:font-semibold"></i></p>

                </div>

                <img className='w-[800px] h-[565px] object-cover rounded-xl' src="https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>

            <div className='flex items-center justify-end mt-24'>
                <img className='w-[800px] h-[565px] object-cover rounded-xl' src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            
                <div  className='bg-slate-300 p-[150px] mt-[100px] rounded-2xl font-light leading-loose'>
                <p className='text-xs mb-7'>D I N I N G </p>
                <p>Sublime seafront locations overlooking the Adriatic; a variety of state-of-the-art luxury venues; experienced event-planning and technical support teams – everything you need to host a superb,standout event in beautiful Dubrovnik is here, ready for you.</p>
                <p className='text-xs font-semibold mt-7'>EXPLORE OUR RESTAURANTS<i class="ri-arrow-right-circle-line text-3xl font-thin text-red-500 ml-2 cursor-pointer hover:font-semibold"></i></p>

                </div>
            </div>

            <div className='flex items-center justify-center mt-48 pb-44'>
                <div><img className='w-[350px] h-[500px] object-cover mr-10 rounded-xl' src="https://images.pexels.com/photos/7284714/pexels-photo-7284714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='mt-8 text-2xl font-thin'>Limousine service</p>
                <p className='mt-6'><i class="ri-arrow-right-circle-line text-3xl mt-10 cursor-pointer font-thin text-red-500 hover:font-semibold"></i></p>
                </div>

                <div> <img className='w-[350px] h-[500px] object-cover mr-10 rounded-xl' src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='mt-8 text-2xl font-thin'>Special offers</p>
                <p className='mt-6'><i class="ri-arrow-right-circle-line text-3xl mt-10 cursor-pointer font-thin text-red-500 hover:font-semibold"></i></p>
                </div>

                <div><img className='w-[350px] h-[500px] object-cover rounded-xl ' src="https://images.pexels.com/photos/18162978/pexels-photo-18162978/free-photo-of-layers-of-sand-dunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='mt-8 text-2xl font-thin'>Free Guided Tours in Winter Months</p>
                <p className='mt-6'><i class="ri-arrow-right-circle-line text-3xl mt-10 cursor-pointer font-thin text-red-500 hover:font-semibold"></i></p>
                </div>
                
               
                
            </div>

           
        </div>
        
    )
}

export default Home
