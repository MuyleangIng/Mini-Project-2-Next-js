import React from 'react';
import {Footer} from "flowbite-react";
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from "react-icons/all";

function FooterComponent(props) {
    return (
        <div>
            {/*<Footer container={true}>*/}
            {/*    <div className="w-full mt-10 ">*/}
            {/*        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">*/}
            {/*            <div className={"m-8"} >*/}
            {/*                <Footer.Brand*/}
            {/*                    href="/"*/}
            {/*                    src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Mozilla_dinosaur_head_logo.png"*/}
            {/*                    alt="Flowbite Logo"*/}

            {/*                    name="DinoShop"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className= "   grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">*/}
            {/*                <div>*/}
            {/*                    <Footer.Title title="about" />*/}
            {/*                    <Footer.LinkGroup col={true}>*/}
            {/*                        <Footer.Link href="#">*/}
            {/*                            Dino*/}
            {/*                        </Footer.Link>*/}
            {/*                        <Footer.Link href="#">*/}
            {/*                            Tailwind CSS*/}
            {/*                        </Footer.Link>*/}
            {/*                    </Footer.LinkGroup>*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <Footer.Title title="Follow us" />*/}
            {/*                    <Footer.LinkGroup col={true}>*/}
            {/*                        <Footer.Link href="#">*/}
            {/*                            Github*/}
            {/*                        </Footer.Link>*/}
            {/*                        <Footer.Link href="#">*/}
            {/*                            Discord*/}
            {/*                        </Footer.Link>*/}
            {/*                    </Footer.LinkGroup>*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <Footer.Title title="Legal" />*/}
            {/*                    <Footer.LinkGroup col={true}>*/}
            {/*                        <Footer.Link href="#">*/}
            {/*                            Privacy Policy*/}
            {/*                        </Footer.Link>*/}
            {/*                        <Footer.Link href="#">*/}
            {/*                            Terms & Conditions*/}
            {/*                        </Footer.Link>*/}
            {/*                    </Footer.LinkGroup>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <Footer.Divider />*/}
            {/*        <div className="w-full sm:flex sm:items-center sm:justify-between">*/}
            {/*            <Footer.Copyright*/}
            {/*                href="#"*/}
            {/*                by="DinoShop™"*/}
            {/*                year={2023}*/}
            {/*            />*/}
            {/*            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">*/}
            {/*                <Footer.Icon*/}
            {/*                    href="#"*/}
            {/*                    icon={BsFacebook}*/}
            {/*                />*/}
            {/*                <Footer.Icon*/}
            {/*                    href="#"*/}
            {/*                    icon={BsInstagram}*/}
            {/*                />*/}
            {/*                <Footer.Icon*/}
            {/*                    href="#"*/}
            {/*                    icon={BsTwitter}*/}
            {/*                />*/}
            {/*                <Footer.Icon*/}
            {/*                    href="#"*/}
            {/*                    icon={BsGithub}*/}
            {/*                />*/}
            {/*                <Footer.Icon*/}
            {/*                    href="#"*/}
            {/*                    icon={BsDribbble}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Footer>*/}
            <Footer container>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                alt="Flowbite Logo"
                                href="https://flowbite.com"
                                name="Flowbite"
                                src="https://flowbite.com/docs/images/logo.svg"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">
                                        Flowbite
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Tailwind CSS
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            by="Flowbite™"
                            href="#"
                            year={2022}
                        />
                    </div>
                </div>
            </Footer>
        </div>
    );
}

export default FooterComponent;