import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import './Employee.css';
import Button from "../../Components/Button/Button";
import image1 from "../../images/eyecam-co.svg";
import image2 from "../../images/loop-studios.svg";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import {connect} from "react-redux";
import getAllUserThunk from "../../redux/actions/fetchAllEmployees";
import Loader from "../../Components/Loader/Loader";
import ReactPaginate from 'react-paginate';



const Employee = ({employees, getAllUserThunk})=>{



    const [isLoading, setIsLoading] = useState(false);
    const [offSet, setOffSet] = useState(0)
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage]  = useState(0);
    // const [employees, setEmployees] = useState([])

    const fetchData = async ()=>{
        await getAllUserThunk();
    }

    useEffect(()=>{
        fetchData();
    }, []);


    // const handlePageClick = (e) => {
    //     const selectedPage = e.selected;
    //     const offset = selectedPage * perPage;
    //     setCurrentPage(selectedPage)
    //     setOffSet(offset)
    // };


    console.log("EMPLOYESSS",employees)

    return (

        <div>
            <Layout/>
            <div className="title">
                <h2>employee</h2>
                <Button label="add an employee"/>
            </div>

            <div className="all-content">
                <div className="sideNav">
                    <div className="sideNav__content">
                        <div className="header-1">
                            <img src={image2} alt="logo" className="little"/>
                            <h6>All Employees</h6>
                        </div>
                        <div className="project">
                            <h3>PROJECT</h3>
                            <div className="header-1">
                                <img src={image1} alt="logo" className="little"/>
                                <h6>All Employees</h6>
                            </div>
                            <div className="project">
                                <div className="header-1">
                                    <img src={image1} alt="logo" className="little"/>
                                    <h6>All Employees</h6>
                                </div>
                            </div>

                            <div className="header-1">
                                <img src={image1} alt="logo" className="little"/>
                                <h6>All Employees</h6>
                            </div>
                            <div className="header-1">
                                <img src={image1} alt="logo" className="little"/>
                                <h6>All Employees</h6>
                            </div>
                            <div className="header-1">
                                <img src={image1} alt="logo" className="little"/>
                                <h6>All Employees</h6>
                            </div>
                        </div>

                        <div className="status">
                            <h3>STATUS</h3>
                            <div className="header-1">
                                <img src={image1} alt="logo" className="little"/>
                                <h6>All Employees</h6>
                            </div>
                            <div className="header-1">
                                <img src={image1} alt="logo" className="little"/>
                                <h6>All Employees</h6>
                            </div>

                        </div>
                    </div>
                    <div className="add">
                        <Button label="add a project"/>
                    </div>
                </div>
                <div className="container">
                    {isLoading ? <Loader/> :
                        (


                            employees && employees?.data?.map((employer, index)=>(
                            <EmployeeCard
                                key={employer.id}
                                name={employer.login}
                                img={employer.avatar_url}
                            />
                        )))
                    }

                </div>

            </div>


            {/*<ReactPaginate*/}
            {/*    previousLabel={"prev"}*/}
            {/*    nextLabel={"next"}*/}
            {/*    breakLabel={"..."}*/}
            {/*    breakClassName={"break-me"}*/}
            {/*    pageCount={this.state.pageCount}*/}
            {/*    marginPagesDisplayed={2}*/}
            {/*    pageRangeDisplayed={5}*/}
            {/*    onPageChange={handlePageClick}*/}
            {/*    containerClassName={"pagination"}*/}
            {/*    subContainerClassName={"pages pagination"}*/}
            {/*    activeClassName={"active"}/>*/}

        </div>
    )
}

const mapStateToProps = state => ({
    employees: state.employee.allUser,

});
export default connect(mapStateToProps, {getAllUserThunk})(Employee);