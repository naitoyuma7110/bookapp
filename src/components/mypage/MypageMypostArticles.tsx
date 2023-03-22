import { ArticlesProps } from '@/types/ArticlesProps';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  myPostArticles: ArticlesProps[];
};

const MypageMypostArticles = (props: Props) => {
  return (
    <div className='container mx-auto px-6 py-16'>
      <div className='mx-auto sm:w-8/12 lg:w-6/12 xl:w-[40%]'>
        <div className='overflow-x-auto'>
          <h1 className='mb-8 text-center text-3xl'>All articles you post</h1>
          <div className='text-center my-5'>
            <Link href='/articles/post'>
              <span className='group mt-5 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 font-medium text-gray-900 hover:text-white focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'>
                <span className='rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                  New Post
                </span>
              </span>
            </Link>
          </div>
          <table className='w-full table-auto'>
            <tbody className='divide-y divide-slate-100 text-sm font-medium'>
              {props.myPostArticles.map((article) => (
                <tr
                  key={article.id}
                  className='group transition-colors hover:bg-gray-100'
                >
                  <td className='py-4 pl-4 '>
                    <div>
                      <p
                        onClick={() => Router.push(`/articles/${article.id}`)}
                        className='cursor-pointer  text-lg font-semibold text-gray-700'
                      >
                        {article.title}
                      </p>
                      <div className='font-medium text-gray-400'>
                        {article.isLikedUsers.length > 1 ||
                        article.isLikedUsers.length === 0
                          ? `${article.isLikedUsers.length} Likes `
                          : `${article.isLikedUsers.length} Like `}
                        {article.isLikedUsers && (
                          <div className='flex mb-5 -space-x-4'>
                            {article.isLikedUsers.map((user, i) => {
                              return (
                                <span key={i} className='mt-1'>
                                  <Image
                                    className='border-2 border-white rounded-full'
                                    src={
                                      user.user.image ||
                                      '/images/github-icon.png'
                                    }
                                    width={30}
                                    height={30}
                                    alt='userIcon'
                                  />
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className='text-center font-medium py-8 pl-4 align-top'>
                    <span
                      className='mr-2 mt-4 cursor-pointer rounded bg-green-100 text-md px-2.5 py-2 text-green-800 dark:bg-green-200 dark:text-green-900'
                      onClick={() =>
                        Router.push(`/articles/edit/${article.id}`)
                      }
                    >
                      編集
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MypageMypostArticles;
