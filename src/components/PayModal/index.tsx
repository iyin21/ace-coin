import { Dispatch, SetStateAction } from "react"
import { Modal } from "@mantine/core"
import Input from "../Input"
import { MdEdit, MdVerified } from "react-icons/md"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import { AiFillApple, AiOutlineWifi } from "react-icons/ai"
import { BiReceipt } from "react-icons/bi"
import { IoLogoCodepen } from "react-icons/io"
import Button from "../Button"
import MasterCardIcon from "../../assets/masterCardIcon.svg"
import MasterCard from "../../assets/mastercard.svg"
import SimCard from "../../assets/sim-card.png"

interface PayModalProps {
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
}
const PayModal = ({ opened, setOpened }: PayModalProps) => {
    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            size="80%"
            withCloseButton
        >
            <div className="flex justify-between lg:hidden mb-4">
                <h4 className="text-blue-50 font-bold">
                    AceCoin
                    <span className="text-blue-60 font-normal">Pay</span>
                </h4>
                <div>
                    <h4 className="text-white">
                        <span className="bg-blue-30 p-1.5 mr-1 rounded">0</span>
                        <span className="bg-blue-30 p-1.5 rounded">1</span>
                        <span className="text-blue-30 mx-1">:</span>
                        <span className="bg-blue-30 p-1.5 mr-1 rounded">1</span>
                        <span className="bg-blue-30 p-1.5 rounded">9</span>
                    </h4>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 pb-4">
                <div className="lg:col-span-2 lg:order-first order-last ">
                    <div className="lg:flex justify-between hidden">
                        <h4 className="text-blue-50 font-bold flex items-center">
                            <IoLogoCodepen color="#025efe" size="34px" />
                            <span className="ml-2">AceCoin</span>

                            <span className="text-blue-60 font-normal">
                                Pay
                            </span>
                        </h4>
                        <div>
                            <h4 className="text-white">
                                <span className="bg-blue-30 p-1.5 mr-1 rounded">
                                    0
                                </span>
                                <span className="bg-blue-30 p-1.5 rounded">
                                    1
                                </span>
                                <span className="text-blue-30 mx-1">:</span>
                                <span className="bg-blue-30 p-1.5 mr-1 rounded">
                                    1
                                </span>
                                <span className="bg-blue-30 p-1.5 rounded">
                                    9
                                </span>
                            </h4>
                        </div>
                    </div>
                    <div className="flex justify-between  mt-4 items-center">
                        <div className="">
                            <h5 className="text-blue-50 font-bold">
                                Card Number
                            </h5>
                            <p>Enter the 16-digit card number on the card</p>
                        </div>
                        <div>
                            <div className="flex items-center cursor-pointer">
                                <MdEdit color="#025efe" />
                                <p className="text-blue-10 ml-2">Edit</p>
                            </div>
                        </div>
                    </div>
                    <Input
                        prefixIcon={<img src={MasterCardIcon} alt="" />}
                        suffixIcon={<MdVerified color="#025efe" size="26px" />}
                        placeholder=" 2412 - 7512 - 3412 - 3456"
                        className="mt-4"
                        inputClassName="pl-2"
                    />
                    <div className="sm:flex mt-6 justify-between ">
                        <div>
                            <h5 className="text-blue-50 font-bold">
                                CVV Number
                            </h5>
                            <p className="text-blue-50 font-light">
                                Enter the 3 or 4 digit number on the card
                            </p>
                        </div>
                        <Input
                            suffixIcon={
                                <BsFillGrid3X3GapFill color="#afb1c0" />
                            }
                            className="sm:w-64"
                        />
                    </div>
                    <div className="sm:flex mt-6 justify-between gap-4">
                        <div>
                            <h5 className="text-blue-50 font-bold">
                                Expiry Date
                            </h5>
                            <p className="text-blue-50 font-light">
                                Enter the expiration data of the card
                            </p>
                        </div>
                        <div className="flex items-center  sm:w-64">
                            <Input />
                            <span className="text-blue-50 font-bold mx-4">
                                /
                            </span>
                            <Input
                                className="border-blue-10 border-2 bg-blue-70"
                                inputClassName="bg-blue-70 text-blue-10 font-bold"
                            />
                        </div>
                    </div>
                    <div className="sm:flex mt-6 justify-between">
                        <div>
                            <h5 className="text-blue-50 font-bold">Password</h5>
                            <p className="text-blue-50 font-light">
                                Enter your Dynamic password
                            </p>
                        </div>
                        <Input
                            suffixIcon={
                                <BsFillGrid3X3GapFill color="#afb1c0" />
                            }
                            className="sm:w-64"
                        />
                    </div>
                    <Button className="w-full mt-6">Pay Now</Button>
                </div>
                <div className="w-full">
                    <div className="bg-gradient-to-b from-blue-90 to-blue-80 rounded-lg mt-[100px] pb-2 lg:order-last order-1">
                        <div className="flex justify-between  pt-48 px-6">
                            <div className="text-blue-50 font-light">
                                <h5 className="mb-2">Company</h5>
                                <h5 className="mb-2">Order Number</h5>
                                <h5 className="mb-2">Product</h5>
                                <h5 className="mb-2">VAT(20%)</h5>
                            </div>
                            <div className="text-blue-50 font-bold ">
                                <div className="flex items-center justify-end">
                                    <div className="bg-[black] rounded-full p-1">
                                        <AiFillApple color="white" />
                                    </div>
                                    <h5 className="mb-2 ml-2 pt-1 text-right">
                                        Apple
                                    </h5>
                                </div>

                                <h5 className="mb-2 text-right">1266210</h5>
                                <h5 className="mb-2 text-right">MacBook Air</h5>
                                <h5 className="mb-2 text-right">$100.00</h5>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#fefefe] shadow-lg shadow-blue-500/50 mx-[1em] sm:mx-[2.5rem]  lg:mx-6 xl:mx-10 rounded-lg absolute top-32 lg:top-14 lg:w-[180px] xl:w-[200px] w-[80%]">
                        <div className="p-4 pt-8">
                            <div className="flex items-center justify-between ">
                                <img
                                    src={SimCard}
                                    width="30px"
                                    height="30px"
                                    alt=""
                                />
                                <AiOutlineWifi size="26px" />
                            </div>
                            <h5 className="mt-20">Jonathan Michael</h5>
                            <h5 className="font-bold">
                                <span className="text-[36px]">....</span> 3456
                            </h5>
                            <div className="flex justify-between mt-4">
                                <p className="font-semibold text-[13px]">
                                    09/22
                                </p>
                                <img
                                    src={MasterCard}
                                    alt=""
                                    width="40px"
                                    height="40px"
                                />
                            </div>
                        </div>
                    </div>
                    <hr className="border-dashed border-blue-60" />

                    <div className="px-4 bg-blue-80 relative">
                        <div className=" absolute rounded-full bg-white top-[-10px] left-[-10px] w-[20px] h-[20px]"></div>
                        <div className=" absolute rounded-full bg-white top-[-10px] right-[-10px] w-[20px] h-[20px]"></div>
                        <div className="text-blue-50 py-4 flex justify-between items-center">
                            <div>
                                <h5>You have to Pay</h5>
                                <h4 className="font-bold">
                                    549
                                    <span className="text-md">
                                        .99{" "}
                                        <span className="font-light">USD</span>
                                    </span>
                                </h4>
                            </div>

                            <BiReceipt size="30px" />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default PayModal
