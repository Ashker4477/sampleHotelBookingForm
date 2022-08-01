import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { bookHotel } from './HotelFormSplice';

export default function HotelForm() {
    const dispatch = useDispatch();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (!data) return;
        console.log(data);
        dispatch(bookHotel(data));
    };

    return (
        <form className="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <h1 className="">Hotel Reservation Form</h1>
                <p className="">Please complete the form below.</p>
            </div>
            <hr />
            <div className="">
                <p className="">Your registration will be verified prior to your arrival.</p>
            </div>
            <div className="">
                <label htmlFor="fullname">Full Name</label>
                <div className="row">
                    <div className="col">
                        <input id="firstName" type={'text'} {...register('firstName', { required: 'Please fill this field' })} placeholder="First Name" />
                        {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
                    </div>
                    <div className="col">
                        <input id="lastName" type={'text'} {...register('lastName', { required: 'Please fill this field' })} placeholder="Last Name" />
                        {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
                    </div>
                </div>
            </div>
            <div className="">
                <label htmlFor="street_address">Address</label>
                <div className="row">
                    <div className="col mb-4">
                        <input
                            id="street_address"
                            type={'text'}
                            {...register('street_address', { required: 'Please fill this field' })}
                            placeholder="Street Address"
                        />
                        {errors.street_address && <small className="text-danger">{errors.street_address.message}</small>}
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-4">
                        <input
                            id="street_address_line2"
                            type={'text'}
                            {...register('street_address_line2', { required: 'Please fill this field' })}
                            placeholder="Street Address Line 2"
                        />
                        {errors.street_address_line2 && <small className="text-danger">{errors.street_address_line2.message}</small>}
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-4">
                        <input id="city" type={'text'} {...register('city', { required: 'Please fill this field' })} placeholder="City" />
                    </div>
                    <div className="col mb-4">
                        <input id="state" type={'text'} {...register('state', { required: 'Please fill this field' })} placeholder="State" />
                        {errors.state && <small className="text-danger">{errors.state.message}</small>}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input id="zip" type={'text'} {...register('zip', { required: 'Please fill this field' })} placeholder="Postal Code" />
                        {errors.zip && <small className="text-danger">{errors.zip.message}</small>}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="row">
                    <div className="col">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type={'tel'} {...register('phone', { required: 'Please fill this field' })} placeholder="(+91) 7894567845" />
                        {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                    </div>
                    <div className="col">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type={'email'}
                            {...register('email', {
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                    message: 'Please enter valid email',
                                },
                                required: 'Please fill this field',
                            })}
                            placeholder="myname@example.com"
                        />
                        {errors.email && <small className="text-danger">{errors.email.message}</small>}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="row">
                    <div className="col">
                        <label htmlFor="">Arrival - Date and Time</label>
                        <input type={'date'} {...register('arrival_date', { required: 'Please fill this field' })} />
                        {errors.arrival_date && <small className="text-danger">{errors.arrival_date.message}</small>}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="row">
                    <div className="col">
                        <label htmlFor="">Departure - Date and Time</label>
                        <input type={'date'} {...register('departure', { required: 'Please fill this field' })} />
                        {errors.departure && <small className="text-danger">{errors.departure.message}</small>}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="row">
                    <div className="col">
                        <label htmlFor="">Number of Adults</label>
                        <input type={'number'} {...register('no_of_adults', { required: 'Please fill this field' })} placeholder="ex: 4" />
                        {errors.no_of_adults && <small className="text-danger">{errors.no_of_adults.message}</small>}
                    </div>
                    <div className="col">
                        <label htmlFor="">Number of Kids</label>
                        <input type={'number'} {...register('no_of_kids', { required: 'Please fill this field' })} placeholder="ex: 5" />
                        {errors.no_of_kids && <small className="text-danger">{errors.no_of_kids.message}</small>}
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="">Payment Method</label>
                {errors.paymentMethod && <small className="text-danger">{errors.paymentMethod.message}</small>}
                <div className="row">
                    {['Paypal', 'Check'].map((payment) => {
                        return (
                            <div key={payment} className="col">
                                <input
                                    type={'radio'}
                                    name={'paymentMethod'}
                                    {...register('paymentMethod', { required: 'Please fill this field' })}
                                    className="p-2 outline-none focus:ring-0"
                                    id={payment}
                                    value={payment}
                                    checked={payment === selectedPaymentMethod}
                                    onChange={() => setSelectedPaymentMethod(payment)}
                                />
                                <label htmlFor={payment} className="p-2">
                                    {payment}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="">
                <label htmlFor="">Do you have any special request?</label>
                <textarea name={'special_request'} {...register('special_request', { required: 'Please fill this field' })} rows={4} />
                {errors.special_request && <small className="text-danger">{errors.special_request.message}</small>}
            </div>
            <div className="d-flex align-items-center mt-4">
                <button className="btn btn-primary small">Submit</button>
            </div>
        </form>
    );
}
