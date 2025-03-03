import React, { useEffect, useState } from 'react';
import './CustomerList.scss';
import userService from '../../services/user';
import { toast } from 'react-toastify';
import moment from 'moment';
import Toast from '../../components/Toast/Toast';
import userImg from '../../assets/images/user.webp';

const CustomerList = () => {
  const [customerList, setCustomerList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllCustomer = async () => {
    try {
      const res = await userService.getUserList();
      setCustomerList(res);
    } catch (error) {
      toast.error(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllCustomer()
  }, [])

  return (
    <div className='customerList'>
      <Toast />
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined on</th>
            </tr>
          </thead>
          <tbody>
            {
              loading ?
                <tr>
                  <td colSpan={6}>Loading...</td>
                </tr>
                :
                customerList.length > 0
                  ?
                  customerList.map((item) => (
                    <tr key={item._id}>
                      <td className='productImg'>
                        <img src={userImg} alt="img" />
                      </td>
                      <td>{item.name || 'NA'}</td>
                      <td>{item.email}</td>
                      <td>{moment(item.createdAt).format("MMM Do YY")}</td>
                    </tr>
                  ))
                  :
                  <tr>
                    <td colSpan={6}>Data not found!</td>
                  </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default CustomerList;