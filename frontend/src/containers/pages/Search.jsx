import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page, search_blog, search_blog_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import { useParams } from "react-router-dom";
import BlogCardSearch from "components/blog/BlogCardSearch";
import BlogList from "components/blog/search/BlogList";
function Search({
    posts,
    count,
    next,
    previous,
    search_blog,
    search_blog_page
}) {

    const params = useParams()
    const term = params.term

    useEffect(() => {
        window.scrollTo(0, 0)
        search_blog(term)
    }, [])
    return (
        <Layout>
            {/* aqui va el helmet */}
            <Navbar />
            <div className="pt-24">
                <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-full my-10">
                        <BlogList posts={posts && posts} get_blog_list_page={search_blog_page} term={term} count={count && count} />
                    </div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({
    posts: state.blog.filtered_post,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})
export default connect(mapStateToProps, {
    search_blog,
    search_blog_page
})(Search)