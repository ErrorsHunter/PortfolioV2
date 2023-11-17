function EducationTimeline() {
    return (
        <section >
            <div className='py-8 text-center '>
                <h1 className='text-lg font-semibold uppercase'>Timeline</h1>
                <p className='py-1'>Explore my educational journey, from schools to college, and the foundations that have shaped my coding path.</p>
            </div>

            <div className="py-4">

                <div className="flex flex-col justify-center">
                    <div className="w-full sm:px-0">

                        <div className="relative ">

                            <div className="hidden rounded sm:block w-1 bg-dark absolute h-full left-1/2 transform -translate-x-1/2"></div>

                            <div className="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-up">
                                <div className="flex flex-col sm:flex-row items-center">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-5/12 max-sm:w-full">
                                            <div className="p-4  rounded border-2 max-sm:pt-8">
                                                <label className="font-semibold">Full Stack Web Developer</label>
                                                <p>Henosis Tech PVT. LTD.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-light max-sm:w-3/4 border-dark border-2 p-2 text-dark absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                        <small className="text-xs font-semibold">01 July 2022 - Present</small>

                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-up">
                                <div className="flex flex-col sm:flex-row items-center">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-5/12 max-sm:w-full">
                                            <div className="p-4  rounded border-2 max-sm:pt-8">
                                                <label className="font-semibold">BCA</label>
                                                <p>Student at ICFAI University Sikkim</p>
                                                <hr className="my-2" />
                                                <div>
                                                    <span>Awards & Certificates</span>
                                                    <ul className="list-disc ps-4">
                                                        <li><small>Runner Up Web Development Competition (Ablaze 2022)</small></li>
                                                        <li><small>Internship - Leave Management Web Portal  (NIC Sikkim)</small></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full  max-sm:w-3/4 border-dark border-2 p-2 text-dark bg-light absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                        <small className="text-xs font-semibold">23 Mar 2019 - 22 July 2022</small>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-up">
                                <div className="flex flex-col sm:flex-row items-center">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-5/12 max-sm:w-full">
                                            <div className="p-4  rounded border-2 max-sm:pt-8">
                                                <label className="font-semibold">Class 12 CBSE</label>
                                                <p>Student at West Point Sr. Sec. School</p>
                                                <hr className="my-2" />
                                                <div>
                                                    <span>Awards & Certificates</span>
                                                    <ul className="list-disc ps-4">
                                                        <li><small>On the Job Training (SRM University Sikkim)</small></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-light max-sm:w-3/4 border-dark border-2 p-2 text-dark absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                        <small className="text-xs font-semibold">23 Jan 2018 - 22 Jan 2020</small>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationTimeline;