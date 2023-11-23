import React from 'react'
import { Tabs} from 'antd';
import Products from './Products';
import UserBids from './UserBids';
import { useSelector } from 'react-redux';
import moment from 'moment';

function Profile() {
    const {user} = useSelector((state)=>state.users);
  return (
    <div>
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Products" key="1">
                {/* <h1>Buy/Sell</h1> */}
                <Products />
            </Tabs.TabPane>
            <Tabs.TabPane tab="My Offers" key="2">
                {/* <h1>My Offers</h1> */}
                <UserBids />
            </Tabs.TabPane>
            <Tabs.TabPane tab="General" key="3">
                {/* <h1>General</h1> */}
                <div className='flex flex-col w-1/3 border border-dashed p-5'>
                    <span className=' text-xl flex justify-between'>
                        Name: <span className='text-xl'>{user.name}</span>
                    </span>
                    <span className=' text-xl flex justify-between'>
                        Email: <span className='text-xl'>{user.email}</span>
                    </span>
                    <span className=' text-xl flex justify-between'>
                        Created At : {" "}
                        <span className='text-xl'>
                            {moment(user.createdAt).format("MMM D , YYYY hh:mm A")}
                        </span>
                    </span>
                </div>
            </Tabs.TabPane>
        </Tabs>
    </div>
  )
}

export default Profile