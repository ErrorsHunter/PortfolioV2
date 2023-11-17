import { Base, Small } from "./Components";

function Footer() {
    return (
        <section>
            <footer className='w-full border-dark border-t-2'>
                <div className='w-3/4 mx-auto text-center py-4'>
                    <Base className="text-dark"> &copy; 2023 Brand</Base>
                    <Small className="text-dark">All Rights Reserved.</Small>
                </div>
            </footer>
        </section>
    )
}

export default Footer;