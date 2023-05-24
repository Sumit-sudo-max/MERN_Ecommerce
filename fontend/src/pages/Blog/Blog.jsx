/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import BreadCrumbs from '../../components/Site-Layout/BreadCrumbs';
import Container from '../../components/Container/Container';
import BlogCard from '../../components/BlogCard/BlogCard';
import Meta from '../../components/Site-Layout/Meta';
import { useDispatch , useSelector } from 'react-redux';
import { getAllBlogs } from '../../features/blogs/blogSlice';
import  moment  from 'moment';

const Blog = () => {
    const blogState = useSelector((state) => state?.blog?.blog);

    const dispatch = useDispatch();

    useEffect(() => {
        getBlogs();
    },[]);

    const getBlogs = () => {
        dispatch(getAllBlogs());
    };


    return (
        <>
        <Meta title={'Blogs'} />
        <BreadCrumbs title="Blogs" />
        <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                    <h3 className="filter-title">Find By Categories</h3>
                    <div>
                        <ul className="ps-0">
                        <li>Watch</li>
                        <li>Tv</li>
                        <li>Camera</li>
                        <li>Laptop</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        {
                            blogState && blogState?.map((item, index)=>{
                                return (
                                    <div className="col-6 mb-3" key={index}>
                                        <BlogCard 
                                        id={item?.id} 
                                        title={item?.title} 
                                        description={item?.description}  
                                        image={item?.images[0]?.url}
                                        date={moment(item?.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Blog