import { Button } from "@/components/ui";
import { Plus, Users } from "lucide-react";
import type { CustomerHeadersProps } from "../types/customer.types";

const CustomerHeader = ({ onAdd }: CustomerHeadersProps) => {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0">
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    {/* Title */}
                    <div>
                        <h1 className="text-gray-900 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                                <Users className="h-5 w-5 text-white" />
                            </div>
                            Customers
                        </h1>
                        <p className="text-gray-600 mt-1.5 ml-13">
                            Manage your customers and view their details.
                        </p>
                    </div>
                    <Button onClick={onAdd} className="shadow-sm bg-blue-600 hover:bg-blue-700 cursor-pointer">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Customer
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default CustomerHeader;
