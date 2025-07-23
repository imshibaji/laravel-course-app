import AdminLayout from "@/layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function SettingEdit({ setting }: any) {
    const { data, setData, put, processing, errors } = useForm(setting);
    const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        put(route('admin.settings.update', setting.id), {
            preserveScroll: true,
            onSuccess: () => { },
            onError: () => { },
        });
    }
    return (
        <AdminLayout>
            <div className="container py-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Settings Create</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label htmlFor="key" className="form-label">Key</label>
                                <input value={data.key} onChange={(e) => setData('key', e.target.value)} type="text" className="form-control" id="key" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="value" className="form-label">Value</label>
                                <input value={data.value} onChange={(e) => setData('value', e.target.value)} type="text" className="form-control" id="value" />
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="active" className="form-label">Active</label>
                                    <select value={data.active} onChange={(e) => setData('active', e.target.value)} className="form-select" id="active">
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="type" className="form-label">Type</label>
                                    <select value={data.type} onChange={(e) => setData('type', e.target.value)} className="form-select" id="type">
                                        <option value="string">String</option>
                                        <option value="number">Number</option>
                                        <option value="boolean">Boolean</option>
                                        <option value="json">JSON</option>
                                        <option value="array">Array</option>
                                        <option value="object">Object</option>
                                        <option value="date">Date</option>
                                        <option value="time">Time</option>
                                        <option value="datetime">Datetime</option>
                                        <option value="enum">Enum</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input value={data.description} onChange={(e) => setData('description', e.target.value)} type="text" className="form-control" id="description" />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    {processing ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}