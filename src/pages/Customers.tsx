import CustomersAnalytics from '@/features/customers/components/customers-analytics';
import CustomerHeaders from '@/features/customers/components/customers-header';
import { CustomerModal } from '@/features/customers/components/customers-modal';
import CustomersTableSection from '@/features/customers/components/customers-table-section';
import useCustomers from '@/features/customers/hooks/use-customers';

const Customers = () => {
    const { modals, handlers, data, pagination, sorting } = useCustomers();

    const { customers, total, isLoading } = data;

    const isEmpty = !isLoading && customers.length === 0;
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100/50">
            <CustomerHeaders
                onAdd={() =>
                    handlers.addCustomer({
                        // boş customer default
                        name: 'John Doe',
                        phone: '123456789',
                        avatar: '',
                        company: '',
                        email: '',
                        status: 'active',
                        lastActivity: '',
                        owner: '',
                    })
                }
            />
            <CustomerModal
                open={modals.modalOpen}
                onClose={modals.onCloseModal}
                onSave={modals.onSave}
                mode={modals.modalMode}
                customer={modals.selectedCustomer}
            />
            <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
                {isEmpty ? (
                    <p className="text-center text-gray-500">No customers yet</p>
                ) : (
                    <>
                        {/* Analytics (istəsən sonra ayrıca endpoint edərik) */}
                        <CustomersAnalytics
                            analytics={{
                                totalCustomers: total,
                                activeCustomers: customers.filter((c) => c.status === 'active').length,
                                inactiveCustomers: customers.filter((c) => c.status === 'inactive').length,
                                leadCustomers: customers.filter((c) => c.status === 'lead').length,
                                churnedCustomers: customers.filter((c) => c.status === 'churned').length,
                                conversionRate: '—',
                                recentlyActive: 0,
                            }}
                        />

                        <CustomersTableSection
                            customers={customers}
                            totalCount={total}
                            pagination={pagination}
                            sorting={sorting}
                            onEdit={handlers.editCustomer}
                            onDelete={handlers.askDelete}
                            loading={isLoading}
                        />
                    </>
                )}
            </main>
        </div>
    );
};

export default Customers;
