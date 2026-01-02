import CustomerHeaders from '@/features/customers/components/customers-header';
import { CustomerModal } from '@/features/customers/components/customers-modal';
import useCustomers from '@/features/customers/hooks/use-customers';

const Customers = () => {
    const { modals, handlers, ui } = useCustomers();
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100/50">
            <CustomerHeaders onAdd={handlers.addCustomer} />
            <CustomerModal
                open={modals.modalOpen}
                onClose={() =>
                    handlers.saveCustomer({
                        name: '',
                        phone: '',
                        avatar: '',
                        company: '',
                        email: '',
                        status: 'active',
                        lastActivity: '',
                        owner: '',
                    })
                }
                onSave={modals.onSave}
                mode={modals.modalMode}
            />
            <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

                {ui.showEmptyState ? (
                  ui.emptyState
                ) : (
                  <>

                  </>
                )}
            </main>
        </div>
    );
};

export default Customers;
