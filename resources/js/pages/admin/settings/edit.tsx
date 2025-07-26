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
                                <input readOnly value={data.key} onChange={(e) => setData('key', e.target.value)} type="text" className="form-control" id="key" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="value" className="form-label">Value</label>
                                <textarea value={data.value} onChange={(e) => setData('value', e.target.value)} className="form-control" id="value" rows={10} />
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
                                        <option value="markdown">Markdown</option>
                                        <option value="html">HTML</option>
                                        <option value="text">Text</option>
                                        <option value="css">CSS</option>
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