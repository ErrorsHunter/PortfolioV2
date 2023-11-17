import { Base, Link, Small } from "./Components";

function NavBar(props: any) {
    return (
        <section className="w-full fixed z-50">
            <aside className="p-1 backdrop-blur-lg shadow-lg border-b-2 border-dark">
                <div className='w-3/4 mx-auto flex text-center items-center flex-wrap justify-center gap-4'>
                    <div className="text-center cursor-pointer rounded p-1 group border-2 transition-colors ease-in-out delay-150 border-white hover:border-dark">
                        <i className="material-symbols-outlined text-dark">home</i>
                        <span className="br"></span>
                        <Small className='text-dark '>Home</Small>
                    </div>
                    <div className="text-center rounded p-1 border-2 border-white transition-colors ease-in-out delay-150 hover:border-dark">
                        <i className="material-symbols-outlined text-dark">conversion_path</i>
                        <span className="br"></span>
                        <Small className='cursor-pointer text-dark'>Timeline</Small>
                    </div>
                    <div className="text-center rounded p-1 border-2 border-white transition-colors ease-in-out delay-150 hover:border-dark">
                        <i className="material-symbols-outlined text-dark">list_alt</i>
                        <span className="br"></span>
                        <Small className='cursor-pointer text-dark'>Projects</Small>
                    </div>
                    <div className="text-center rounded p-1 border-2 border-white transition-colors ease-in-out delay-150 hover:border-dark">
                        <i className="material-symbols-outlined text-dark">send</i>
                        <span className="br"></span>
                        <Small className='cursor-pointer text-dark'>Contact</Small>
                    </div>
                    {/* <div className='ms-3 rounded-full bg-primary h-4 cursor-pointer toggler flex ' onClick={() => props.modeTogglerHandler()}>

                        <i className="material-symbols-outlined p-0 m-0 text-light">light_mode</i>
                        <i className="material-symbols-outlined text-light">dark_mode</i>
                        <i className={`material-symbols-outlined text-light bg-light border-2 border-dark rounded-full -translate-y-[1px] transition-transform absolute ${props.isLightMode ? "translate-x-4" : "-translate-x-[0px]"}`} >
                            circle
                        </i>
                    </div> */}
                </div>
            </aside>
        </section>
    )
}

export default NavBar;