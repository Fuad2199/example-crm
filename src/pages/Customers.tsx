import CustomersTable from "@/features/customers/components/CustomerTable";
import { useCustomer } from "@/features/customers/hooks/useCustomer";

const Customers = () => {
    const { data: allCustomers = [] } = useCustomer();

    return (
        <div className="flex justify-center items-center text-white">
            <article className="card">
                <header className="card-header">
                    <h1>Customers</h1>
                </header>
                <section className="card-body p-0">
                    <CustomersTable customers={allCustomers}/>
                </section>
            </article>
        </div>
    );
};

export default Customers;
