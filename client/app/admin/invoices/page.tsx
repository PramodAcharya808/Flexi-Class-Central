'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from '../../../app/utils/Heading';
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';
import AllInvoices from "../../../app/components/Admin/Order/AllInvoices";

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
         title="Flexi Class - Admin"
         description="Flexi Class is a platform for learners to learn and get help from leading tech instructors"
         keywords="Programming,MERN,Redux,Machine Learning, security, linux, cloud computing, cloud administration, cloud security,cyber security"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               <AllInvoices />
            </div>
        </div>
    </div>
  )
}

export default page