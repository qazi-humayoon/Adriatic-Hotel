import React from 'react'

function About() {
    return (
        <div className=''>
            <div className='bg-slate-200'>
            <img className='w-[1200px] h-[700px] object-cover ml-[319px]' src="https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>

            <div className='absolute w-[1265px] h-[370px] top-[400px] bg-white flex p-[100px] gap-20'>
                <div>
                    <h1 className='text-4xl mb-6 font-serif'>About Adriatic Luxury <br /> Hotels</h1>
                    <p className='text-2xl font-thin leading-relaxed'>Adriatic Luxury Hotels (ALH) is a premier hotel <br /> group with a portfolio of luxurious hotels and <br /> villas in Dubrovnik, Croatia.</p>

                </div>
                <div>
                    <p className='font-thin text-lg leading-relaxed'>Adriatic Luxury Hotels present some of the most luxurious hotels <br /> and villas in Croatia, offering a combination of outstanding leisure <br /> and business facilities, and superior services. The hotels are located <br /> in magnificent settings in Dubrovnik, Cavtat, and on the island of <br /> Mljet.</p>
                </div>
            </div>

            <div className='mt-40 bg-gray-200 flex justify-center gap-80 p-[130px]'>
                <div>
                    <h1 className='text-5xl font-thin'>The ALH <br /> portfolio includes:</h1>
                </div>
                <div className='flex gap-20'>
                <div>
                    <ul className=' font-thin'>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Hotel Excelsior Dubrovnik</li>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Hotel Kompas Dubrovnik</li>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Hotel Bellevue Dubrovnik</li>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Hotel Croatia Cavtat</li>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Villa Orsula Dubrovnik</li>
                        <li><i class="ri-arrow-right-double-line mr-3"></i>Hotel Odisej Mljet</li>
                    </ul>
                </div>
                <div>
                <ul className='font-thin'>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Hotel Excelsior Dubrovnik</li>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Hotel Kompas Dubrovnik</li>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Hotel Bellevue Dubrovnik</li>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Hotel Croatia Cavtat</li>
                        <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>Villa Orsula Dubrovnik</li>
                        <li><i class="ri-arrow-right-double-line mr-3"></i>Hotel Odisej Mljet</li>
                    </ul>
                </div>
                </div>
            </div>
            <p className='ml-48 text-4xl mt-32 mb-16 font-thin'>Adriatic Luxury Hotels Management</p>
            <div className='flex items-center justify-center'>
                <div><img className='w-[350px] h-[500px] object-cover mr-10 ' src="https://images.pexels.com/photos/7284714/pexels-photo-7284714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='mt-8 text-2xl font-thin'>David James Taylor</p>
                <p className='mt-6 text-sm'>President of the Management Board</p>
                </div>

                <div> <img className='w-[350px] h-[500px] object-cover mr-10' src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='mt-8 text-2xl font-thin'>Antun Jakobušić</p>
                <p className='mt-4 text-sm'>Member of the Management Board <br /> Director of Finance and Controlling</p>
                </div>

                <div><img className='w-[350px] h-[500px] object-cover ' src="https://images.pexels.com/photos/18162978/pexels-photo-18162978/free-photo-of-layers-of-sand-dunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='mt-8 text-2xl font-thin'>Katija Jerković</p>
                <p className='mt-4 text-sm'>Member of the Management Board <br /> Director of Sales and Marketing</p>
                </div>
                
                 
            </div>
            <div className='flex items-center justify-center pb-44'>
                <div>
                <img className='w-[350px] h-[500px] object-cover mr-10 mt-20' src="https://images.pexels.com/photos/7284714/pexels-photo-7284714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='mt-6 text-2xl font-thin'>Vlado Lučić</p>
                <p className='mt-4 text-sm'>Member of the Management Board <br /> Director of Operations and Corporate<br /> Development</p>
                </div>

                <div>
                 <img className='w-[350px] h-[500px] object-cover mr-10 mt-20' src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='mt-8 text-2xl font-thin'>Josip Mikulić</p>
                <p className='mt-6 text-sm'>Member of the Management Board<br /> Director of HR and Legal Affairs</p>
                </div>

                <div>
                <img className='w-[350px] h-[500px] object-cover mt-20' src="https://images.pexels.com/photos/18162978/pexels-photo-18162978/free-photo-of-layers-of-sand-dunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='mt-8 text-2xl font-thin'>Lukša Rašica</p>
                <p className='mt-6 text-sm'>Member of the Management Board<br /> Director of Capex, IT and Maintenance</p>
                </div>    
            </div>

            <div className='bg-slate-200 p-32'>
                <h1 className='text-4xl font-thin'>ALH Business</h1>
                <h1 className='text-4xl font-thin mt-2'>Reports:</h1>

                <p className='text-lg mt-16'><i class="ri-arrow-right-double-line mr-4"></i>ALH Code of Ethics 2023</p>

            </div>

            <div className='p-32'>
                <h1 className='text-4xl font-thin mb-14'>Policies:</h1>
                <div className='flex'>
                    <div className='mr-16'>
                        <ul>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH QUALITY POLICY</li>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH ENVIRONMENTAL PROTECTION AND ENERGY MANAG. POLICY</li>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH OCCUPATIONAL HEALTH & SAFETY POLICY</li>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH FOOD SAFETY POLICY</li>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH INFORMATION SECURITY POLICY</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH BIOSAFETY POLICY</li>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH Sustainability Policy</li>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH Local Community Policy</li>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH Employment Policy</li>
                            <li className='mb-4'><i class="ri-arrow-right-double-line mr-3"></i>ALH Procurement Policy</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
        
    )
}

export default About
