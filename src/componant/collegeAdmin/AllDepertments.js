import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDepertmentAction } from '../../action/collegeAdminAction'
import Sidebar from './sidebar'

import { Link } from 'react-router-dom'
import './depertment.css'
import { Button, Space } from 'antd'
import TableComponent from '../layout/TableComponent'

const AllDepertments = () => {


  const dispatch = useDispatch()

  const { loading, depertments } = useSelector(state => state.depertments)

  useEffect(() => {
    dispatch(getDepertmentAction())
  }, [dispatch])


  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      // width: 50,
      fixed: 'left'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: "center",
      editable: true,
      render: (_, record) => (
        <Link to={`/depertment/${record.id}`}>{record.name}</Link>
      ),
    },
    {
      title: 'Email'
      , dataIndex: 'email',
      align: "center",
      editable: true
    },
    {
      title: 'Instructor'
      , dataIndex: 'instructor',
      align: "center",
      editable: true
    }, {
      title: 'Action',
      dataIndex: "action",
      align: "center"
      , render: (_, record) =>
        rows.length >= 1 ? (
          <Space>
            {/* <Popconfirm title='Are you sure you want to delete ?'> */}
            <Link to={`/depertment/${record.id}`}> <Button type='primary'> Go</Button></Link>
            {/* </Popconfirm> */}
            {/* <Button onClick={() => console.log('edit')} type='primary'>Edit</Button>
            <Button onClick={() => console.log('edit')} danger type='primary'>Delete</Button> */}
          </Space>
        ) : null
    }
  ]

  const rows = []


  depertments && depertments.forEach((item) => {
    rows.push({
      id: item.id,
      name: item.depertment_name,
      email: item.depertment_email,
      instructor: item.instructor,


    })
  })


  return (
    
    <Fragment>
    <div className="depertmentDeash">
      <Sidebar />
      <div className="dashboard">
      <div className='headdept'>
        
          <h2>Depertments</h2>
      </div>
       
        <TableComponent  columns={columns}
            dataSource={rows}
            loading={loading}/>
      </div>
    </div>
    </Fragment>)
}

export default AllDepertments