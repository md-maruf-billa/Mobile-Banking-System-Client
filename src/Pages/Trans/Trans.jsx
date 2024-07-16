import React from 'react';
import AppFooter from '../../Components/AppFooter/AppFooter';
import TopBanner from '../../Components/TopBanner/TopBanner';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

const Trans = () => {

    // Loaded all transaction

    const { data } = useQuery({
        queryKey: ["My transaction"],
        queryFn: async () => {
            const result = await axios.get("./demo.json");
            return result.data;
        }
    })

    console.log(data)

    return (
        <div>
            <TopBanner />

            <div className='px-8 mt-8'>
                <h2 className='text-3xl font-semibold'>Transactions</h2>
                <div className="overflow-x-auto mt-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Account No</th>
                                <th>Transaction Id</th>
                                <th>Note</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map(({transaction_type,note,transaction_id,transaction_date,phone,email,amount}) =>
                                    <tr className='text-xs overflow-x-scroll' key={email}>
                                        <td>{transaction_type}</td>
                                        <td>{phone}</td>
                                        <td>{transaction_id}</td>
                                        <td>{note}</td>
                                        <td>{amount}</td>
                                    </tr>

                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>

            <div className='fixed   bottom-0'>
                <AppFooter />
            </div>
        </div>
    );
};

export default Trans;