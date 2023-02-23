import * as yup from 'yup';

export const schemaBds = yup
    .object({
        typeBds: yup.mixed().required('Vui lòng nhập trường này'),
        formality: yup.mixed().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
        area: yup.string().required('Vui lòng nhập trường này'),
        price: yup.string().required('Vui lòng nhập trường này'),
        deposit: yup.string().required('Vui lòng nhập trường này'),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();

export const schemaCar = yup
    .object({
        typeProduct: yup.mixed().required('Vui lòng nhập trường này'),
        typeEngine: yup.mixed().required('Vui lòng nhập trường này'),
        typeEnegy: yup.mixed().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
        theFirm: yup.string().required('Vui lòng nhập trường này').max(50, 'Trường này không được quá 50 kí tự'),
        year: yup.number().min(1980, 'Giá trị không hợp lệ').max(2023, 'Giá trị không hợp lệ'),
        origin: yup.string(),
        licensePlate: yup.string().required('Vui lòng nhập trường này'),
        color: yup.string().required('Vui lòng nhập trường này'),
        price: yup.string().required('Vui lòng nhập trường này'),
        numberOfSeats: yup.number(),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();

export const schemaElectronic = yup
    .object({
        typeProduct: yup.mixed().required('Vui lòng nhập trường này'),
        firm: yup.string().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),

        condition: yup.string().required('Vui lòng nhập trường này'),
        memory: yup.string().required('Vui lòng nhập trường này'),
        color: yup.string().required('Vui lòng nhập trường này'),
        warranty: yup.string().required('Vui lòng nhập trường này'),
        price: yup.string().required('Vui lòng nhập trường này'),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();

export const schemaJob = yup
    .object({
        typeHirer: yup.mixed().required('Vui lòng nhập trường này'),
        numOfRecruitment: yup.string().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
        pay: yup.string().required('Vui lòng nhập trường này'),
        minSalary: yup.string().required('Vui lòng nhập trường này'),
        maxSalary: yup.string().required('Vui lòng nhập trường này'),
        career: yup.string().required('Vui lòng nhập trường này'),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();

export const schemaPet = yup
    .object({
        typePet: yup.mixed().required('Vui lòng nhập trường này'),
        species: yup.string().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
        age: yup.string().required('Vui lòng nhập trường này'),
        price: yup.string().required('Vui lòng nhập trường này'),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();

export const schemaHouseWare = yup
    .object({
        typeProduct: yup.string().required('Vui lòng nhập trường này'),
        material: yup.string().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
        price: yup.string().required('Vui lòng nhập trường này'),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();

export const schemaFashion = yup
    .object({
        typeProduct: yup.mixed().required('Vui lòng nhập trường này'),
        price: yup.string().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();

export const schemaFood = yup
    .object({
        typeFood: yup.string().required('Vui lòng nhập trường này'),
        price: yup.string().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();

export const schemaMachine = yup
    .object({
        typeProduct: yup.mixed().required('Vui lòng nhập trường này'),
        firm: yup.string().required('Vui lòng nhập trường này'),
        volume: yup.string().required('Vui lòng nhập trường này'),
        price: yup.string().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();

export const schemaMevaBe = yup
    .object({
        condition: yup.mixed().required('Vui lòng nhập trường này'),
        typeProduct: yup.string().required('Vui lòng nhập trường này'),
        price: yup.string().required('Vui lòng nhập trường này'),
        city: yup.string().required('Vui lòng nhập trường này'),
        district: yup.string().required('Vui lòng nhập trường này'),
        ward: yup.string().required('Vui lòng nhập trường này'),
        detailAddress: yup
            .string()
            .required('Vui lòng nhập trường này')
            .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
            .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
        title: yup
            .string()
            .required('Tiêu đề không được để trống')
            .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
            .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
        descDetail: yup.string().required('Vui lòng nhập trường này'),
    })
    .required();
