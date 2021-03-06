﻿declare namespace Serene.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Serene.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Serene.Administration {
}
declare namespace Serene.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId(): Serenity.StringEditor;
        LanguageName(): Serenity.StringEditor;
    }
}
declare namespace Serene.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace Serene.Administration {
    namespace LanguageService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Administration {
}
declare namespace Serene.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName(): Serenity.StringEditor;
    }
}
declare namespace Serene.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Serene.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace Serene.Administration {
    namespace RolePermissionService {
        const baseUrl: string;
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Serene.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Serene.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace Serene.Administration {
    namespace RoleService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Serene.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Serene.Administration {
    namespace TranslationService {
        const baseUrl: string;
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace Serene.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Serene.Administration {
}
declare namespace Serene.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username(): Serenity.StringEditor;
        DisplayName(): Serenity.StringEditor;
        Email(): Serenity.EmailEditor;
        Password(): Serenity.PasswordEditor;
        PasswordConfirm(): Serenity.PasswordEditor;
        Source(): Serenity.StringEditor;
    }
}
declare namespace Serene.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Grant?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Grant: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Serene.Administration {
    namespace UserPermissionService {
        const baseUrl: string;
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace Serene.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Serene.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Serene.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Serene.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Serene.Administration {
    namespace UserRoleService {
        const baseUrl: string;
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Serene.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Serene.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty: string;
        const isActiveProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace Serene.Administration {
    namespace UserService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.BasicSamples {
    namespace BasicSamplesService {
        const baseUrl: string;
        function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const OrdersByShipper: string;
            const OrderBulkAction: string;
        }
    }
}
declare namespace Serene.BasicSamples {
    class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FilteredLookupInDetailForm {
        CustomerID(): Northwind.CustomerEditor;
        OrderDate(): Serenity.DateEditor;
        CategoryID(): Serenity.LookupEditor;
        DetailList(): FilteredLookupDetailEditor;
    }
}
declare namespace Serene.BasicSamples {
    class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LookupFilterByMultipleForm {
        ProductName(): Serenity.StringEditor;
        ProductImage(): Serenity.ImageUploadEditor;
        Discontinued(): Serenity.BooleanEditor;
        SupplierID(): Serenity.LookupEditor;
        CategoryID(): ProduceSeafoodCategoryEditor;
        QuantityPerUnit(): Serenity.StringEditor;
        UnitPrice(): Serenity.DecimalEditor;
        UnitsInStock(): Serenity.IntegerEditor;
        UnitsOnOrder(): Serenity.IntegerEditor;
        ReorderLevel(): Serenity.IntegerEditor;
    }
}
declare namespace Serene.BasicSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace Serene.BasicSamples {
    interface OrdersByShipperRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Serene.BasicSamples {
    interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}
declare namespace Serene.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace Serene.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword(): Serenity.PasswordEditor;
        NewPassword(): Serenity.PasswordEditor;
        ConfirmPassword(): Serenity.PasswordEditor;
    }
}
declare namespace Serene.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email(): Serenity.EmailEditor;
    }
}
declare namespace Serene.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Serene.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username(): Serenity.StringEditor;
        Password(): Serenity.PasswordEditor;
    }
}
declare namespace Serene.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Serene.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword(): Serenity.PasswordEditor;
        ConfirmPassword(): Serenity.PasswordEditor;
    }
}
declare namespace Serene.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName(): Serenity.StringEditor;
        Email(): Serenity.EmailEditor;
        ConfirmEmail(): Serenity.EmailEditor;
        Password(): Serenity.PasswordEditor;
        ConfirmPassword(): Serenity.PasswordEditor;
    }
}
declare namespace Serene.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CategoryForm {
        CategoryName(): Serenity.StringEditor;
        Description(): Serenity.StringEditor;
    }
}
declare namespace Serene.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const Id: string;
            const CategoryId: string;
            const LanguageId: string;
            const CategoryName: string;
            const Description: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace CategoryLangService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const CategoryID: string;
            const CategoryName: string;
            const Description: string;
            const Picture: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace CategoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveWithLocalizationRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<CategoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const RetrieveLocalization: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
    class CustomerCustomerDemoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerCustomerDemoForm {
        CustomerID(): Serenity.StringEditor;
        CustomerTypeID(): Serenity.StringEditor;
    }
}
declare namespace Serene.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ID: string;
            const CustomerID: string;
            const CustomerTypeID: string;
            const CustomerCompanyName: string;
            const CustomerContactName: string;
            const CustomerContactTitle: string;
            const CustomerAddress: string;
            const CustomerCity: string;
            const CustomerRegion: string;
            const CustomerPostalCode: string;
            const CustomerCountry: string;
            const CustomerPhone: string;
            const CustomerFax: string;
            const CustomerTypeCustomerDesc: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace CustomerCustomerDemoService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CustomerCustomerDemoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerCustomerDemoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerCustomerDemoRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerCustomerDemoRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
    class CustomerDemographicForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerDemographicForm {
        CustomerTypeID(): Serenity.StringEditor;
        CustomerDesc(): Serenity.StringEditor;
    }
}
declare namespace Serene.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ID: string;
            const CustomerTypeID: string;
            const CustomerDesc: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace CustomerDemographicService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CustomerDemographicRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerDemographicRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerDemographicRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerDemographicRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerForm {
        CustomerID(): Serenity.StringEditor;
        CompanyName(): Serenity.StringEditor;
        ContactName(): Serenity.StringEditor;
        ContactTitle(): Serenity.StringEditor;
        Representatives(): Serenity.LookupEditor;
        Address(): Serenity.StringEditor;
        City(): Serenity.StringEditor;
        Region(): Serenity.StringEditor;
        PostalCode(): Serenity.StringEditor;
        Country(): Serenity.StringEditor;
        Phone(): Serenity.StringEditor;
        Fax(): Serenity.StringEditor;
        NoteList(): NotesEditor;
    }
}
declare namespace Serene.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const RepresentativeId: string;
            const CustomerId: string;
            const EmployeeId: string;
        }
    }
}
declare namespace Serene.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
    }
    namespace CustomerRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const ID: string;
            const CustomerID: string;
            const CompanyName: string;
            const ContactName: string;
            const ContactTitle: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Fax: string;
            const NoteList: string;
            const Representatives: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace CustomerService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
    class EmployeeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeeForm {
        LastName(): Serenity.StringEditor;
        FirstName(): Serenity.StringEditor;
        Title(): Serenity.StringEditor;
        TitleOfCourtesy(): Serenity.StringEditor;
        BirthDate(): Serenity.DateEditor;
        HireDate(): Serenity.DateEditor;
        Address(): Serenity.StringEditor;
        City(): Serenity.StringEditor;
        Region(): Serenity.StringEditor;
        PostalCode(): Serenity.StringEditor;
        Country(): Serenity.StringEditor;
        HomePhone(): Serenity.StringEditor;
        Extension(): Serenity.StringEditor;
        Photo(): Serenity.StringEditor;
        Notes(): Serenity.StringEditor;
        ReportsTo(): Serenity.IntegerEditor;
        PhotoPath(): Serenity.StringEditor;
    }
}
declare namespace Serene.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const EmployeeID: string;
            const LastName: string;
            const FirstName: string;
            const FullName: string;
            const Title: string;
            const TitleOfCourtesy: string;
            const BirthDate: string;
            const HireDate: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const HomePhone: string;
            const Extension: string;
            const Photo: string;
            const Notes: string;
            const ReportsTo: string;
            const PhotoPath: string;
            const ReportsToFullName: string;
            const ReportsToLastName: string;
            const ReportsToFirstName: string;
            const ReportsToTitle: string;
            const ReportsToTitleOfCourtesy: string;
            const ReportsToBirthDate: string;
            const ReportsToHireDate: string;
            const ReportsToAddress: string;
            const ReportsToCity: string;
            const ReportsToRegion: string;
            const ReportsToPostalCode: string;
            const ReportsToCountry: string;
            const ReportsToHomePhone: string;
            const ReportsToExtension: string;
            const ReportsToPhoto: string;
            const ReportsToNotes: string;
            const ReportsToReportsTo: string;
            const ReportsToPhotoPath: string;
            const Gender: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace EmployeeService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
    class EmployeeTerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeeTerritoryForm {
        TerritoryID(): Serenity.StringEditor;
    }
}
declare namespace Serene.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const EmployeeID: string;
            const TerritoryID: string;
            const EmployeeLastName: string;
            const EmployeeFirstName: string;
            const EmployeeTitle: string;
            const EmployeeTitleOfCourtesy: string;
            const EmployeeBirthDate: string;
            const EmployeeHireDate: string;
            const EmployeeAddress: string;
            const EmployeeCity: string;
            const EmployeeRegion: string;
            const EmployeePostalCode: string;
            const EmployeeCountry: string;
            const EmployeeHomePhone: string;
            const EmployeeExtension: string;
            const EmployeePhoto: string;
            const EmployeeNotes: string;
            const EmployeeReportsTo: string;
            const EmployeePhotoPath: string;
            const TerritoryTerritoryDescription: string;
            const TerritoryRegionID: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace EmployeeTerritoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<EmployeeTerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeTerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeTerritoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeTerritoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
    enum Gender {
        Male = 1,
        Female = 2,
    }
}
declare namespace Serene.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const NoteId: string;
            const EntityType: string;
            const EntityId: string;
            const Text: string;
            const InsertUserId: string;
            const InsertDate: string;
            const InsertUserDisplayName: string;
        }
    }
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderDetailForm {
        ProductID(): Serenity.LookupEditor;
        UnitPrice(): Serenity.DecimalEditor;
        Quantity(): Serenity.IntegerEditor;
        Discount(): Serenity.DecimalEditor;
    }
}
declare namespace Serene.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const DetailID: string;
            const OrderID: string;
            const ProductID: string;
            const UnitPrice: string;
            const Quantity: string;
            const Discount: string;
            const OrderCustomerID: string;
            const OrderEmployeeID: string;
            const OrderDate: string;
            const OrderShippedDate: string;
            const OrderShipVia: string;
            const OrderShipCity: string;
            const OrderShipCountry: string;
            const ProductName: string;
            const ProductDiscontinued: string;
            const ProductSupplierID: string;
            const ProductQuantityPerUnit: string;
            const ProductUnitPrice: string;
            const LineTotal: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace OrderDetailService {
        const baseUrl: string;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderForm {
        CustomerID(): CustomerEditor;
        OrderDate(): Serenity.DateEditor;
        RequiredDate(): Serenity.DateEditor;
        EmployeeID(): Serenity.LookupEditor;
        DetailList(): OrderDetailsEditor;
        ShippedDate(): Serenity.DateEditor;
        ShipVia(): Serenity.LookupEditor;
        Freight(): Serenity.DecimalEditor;
        ShipName(): Serenity.StringEditor;
        ShipAddress(): Serenity.StringEditor;
        ShipCity(): Serenity.StringEditor;
        ShipRegion(): Serenity.StringEditor;
        ShipPostalCode(): Serenity.StringEditor;
        ShipCountry(): Serenity.StringEditor;
    }
}
declare namespace Serene.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const OrderID: string;
            const CustomerID: string;
            const EmployeeID: string;
            const OrderDate: string;
            const RequiredDate: string;
            const ShippedDate: string;
            const ShipVia: string;
            const Freight: string;
            const ShipName: string;
            const ShipAddress: string;
            const ShipCity: string;
            const ShipRegion: string;
            const ShipPostalCode: string;
            const ShipCountry: string;
            const CustomerCompanyName: string;
            const CustomerContactName: string;
            const CustomerContactTitle: string;
            const CustomerCity: string;
            const CustomerRegion: string;
            const CustomerCountry: string;
            const CustomerPhone: string;
            const CustomerFax: string;
            const EmployeeFullName: string;
            const EmployeeGender: string;
            const ShipViaCompanyName: string;
            const ShipViaPhone: string;
            const ShippingState: string;
            const DetailList: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace OrderService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1,
    }
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductForm {
        ProductName(): Serenity.StringEditor;
        ProductImage(): Serenity.ImageUploadEditor;
        Discontinued(): Serenity.BooleanEditor;
        SupplierID(): Serenity.LookupEditor;
        CategoryID(): Serenity.LookupEditor;
        QuantityPerUnit(): Serenity.StringEditor;
        UnitPrice(): Serenity.DecimalEditor;
        UnitsInStock(): Serenity.IntegerEditor;
        UnitsOnOrder(): Serenity.IntegerEditor;
        ReorderLevel(): Serenity.IntegerEditor;
    }
}
declare namespace Serene.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const Id: string;
            const ProductId: string;
            const LanguageId: string;
            const ProductName: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace ProductLangService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ProductLogID: string;
            const OperationType: string;
            const ChangingUserId: string;
            const ValidFrom: string;
            const ValidUntil: string;
            const ProductID: string;
            const ProductName: string;
            const ProductImage: string;
            const Discontinued: string;
            const SupplierID: string;
            const CategoryID: string;
            const QuantityPerUnit: string;
            const UnitPrice: string;
            const UnitsInStock: string;
            const UnitsOnOrder: string;
            const ReorderLevel: string;
        }
    }
}
declare namespace Serene.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const ProductID: string;
            const ProductName: string;
            const ProductImage: string;
            const Discontinued: string;
            const SupplierID: string;
            const CategoryID: string;
            const QuantityPerUnit: string;
            const UnitPrice: string;
            const UnitsInStock: string;
            const UnitsOnOrder: string;
            const ReorderLevel: string;
            const SupplierCompanyName: string;
            const SupplierContactName: string;
            const SupplierContactTitle: string;
            const SupplierAddress: string;
            const SupplierCity: string;
            const SupplierRegion: string;
            const SupplierPostalCode: string;
            const SupplierCountry: string;
            const SupplierPhone: string;
            const SupplierFax: string;
            const SupplierHomePage: string;
            const CategoryName: string;
            const CategoryDescription: string;
            const CategoryPicture: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace ProductService {
        const baseUrl: string;
        function Create(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<ProductRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const RetrieveLocalization: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RegionForm {
        RegionID(): Serenity.IntegerEditor;
        RegionDescription(): Serenity.StringEditor;
    }
}
declare namespace Serene.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const RegionID: string;
            const RegionDescription: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace RegionService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const CategoryId: string;
            const CategoryName: string;
            const ProductName: string;
            const ProductSales: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace SalesByCategoryService {
        const baseUrl: string;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ShipperForm {
        CompanyName(): Serenity.StringEditor;
        Phone(): PhoneEditor;
    }
}
declare namespace Serene.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const ShipperID: string;
            const CompanyName: string;
            const Phone: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace ShipperService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SupplierForm {
        CompanyName(): Serenity.StringEditor;
        ContactName(): Serenity.StringEditor;
        ContactTitle(): Serenity.StringEditor;
        Address(): Serenity.StringEditor;
        City(): Serenity.StringEditor;
        Region(): Serenity.StringEditor;
        PostalCode(): Serenity.StringEditor;
        Country(): Serenity.StringEditor;
        Phone(): Serenity.StringEditor;
        Fax(): Serenity.StringEditor;
        HomePage(): Serenity.StringEditor;
    }
}
declare namespace Serene.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const SupplierID: string;
            const CompanyName: string;
            const ContactName: string;
            const ContactTitle: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Fax: string;
            const HomePage: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace SupplierService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene.Northwind {
}
declare namespace Serene.Northwind {
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TerritoryForm {
        TerritoryID(): Serenity.StringEditor;
        TerritoryDescription(): Serenity.StringEditor;
        RegionID(): Serenity.LookupEditor;
    }
}
declare namespace Serene.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function lookup(): any;
        namespace Fields {
            const ID: string;
            const TerritoryID: string;
            const TerritoryDescription: string;
            const RegionID: string;
            const RegionDescription: string;
        }
    }
}
declare namespace Serene.Northwind {
    namespace TerritoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Serene {
    class Authorization {
        static hasPermission(permissionKey: string): boolean;
        static get_userDefinition(): ScriptUserDefinition;
    }
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        get_cancelled(): boolean;
        set_cancelled(value: boolean): void;
        get_max(): number;
        set_max(value: number): void;
        get_value(): number;
        set_value(value: number): void;
        get_title(): string;
        set_title(value: string): void;
        get_cancelTitle(): string;
        set_cancelTitle(value: string): void;
    }
    class BulkServiceAction extends Serenity.ScriptContext {
        keys: string[];
        queue: any;
        progressDialog: BasicProgressDialog;
        pendingRequests: number;
        completedRequests: number;
        errorByKey: any;
        createProgressDialog(): void;
        getConfirmationFormat(): string;
        getConfirmationMessage(targetCount: number): string;
        confirm(targetCount: number, action: () => void): void;
        getNothingToProcessMessage(): string;
        nothingToProcess(): void;
        getParallelRequests(): number;
        getBatchSize(): number;
        startParallelExecution(): void;
        serviceCallCleanup(): void;
        executeForBatch(batch: string[]): void;
        executeNextBatch(): void;
        delayed(action: () => void): void;
        getAllHadErrorsFormat(): string;
        showAllHadErrors(): void;
        getSomeHadErrorsFormat(): string;
        showSomeHadErrors(): void;
        getAllSuccessFormat(): string;
        showAllSuccess(): void;
        showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): number;
        set_successCount(value: number): void;
        get_errorCount(): number;
        set_errorCount(value: number): void;
        get_done(): () => void;
        set_done(value: () => void): void;
    }
    namespace DialogUtils {
        function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
    }
    class LanguageList {
        static get_value(): any[];
    }
    namespace ScriptInitialization {
    }
}
declare namespace Serene.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
    }
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        constructor(container: JQuery);
    }
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        constructor(div: JQuery, opt: PermissionCheckEditorOptions);
        get_value(): UserPermissionRow[];
        set_value(value: UserPermissionRow[]): void;
        get_rolePermissions(): string[];
        set_rolePermissions(value: string[]): void;
    }
    class PermissionCheckEditorOptions {
        showRevoke: boolean;
    }
    class PermissionCheckItem {
        ParentKey: string;
        Key: string;
        Title: string;
        IsGroup: boolean;
        GrantRevoke: any;
    }
    class PermissionModuleEditor extends Serenity.Select2Editor<any, string> {
        constructor(hidden: JQuery);
    }
    class RoleCheckEditor extends Serenity.CheckTreeEditor<any, any> {
        constructor(div: JQuery);
    }
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
    }
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        constructor(container: JQuery);
    }
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        constructor(opt: RolePermissionDialogOptions);
    }
    class RolePermissionDialogOptions {
        roleID: number;
        title: string;
    }
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        constructor(container: JQuery);
        saveChanges(language: string): RSVP<any>;
    }
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        constructor(opt: UserPermissionDialogOptions);
    }
    class UserPermissionDialogOptions {
        userID: number;
        username: string;
    }
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        constructor(opt: UserRoleDialogOptions);
    }
    class UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Serene.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        static initializePage(): void;
    }
    class CloneableEntityDialog extends Northwind.ProductDialog {
    }
    class CloneableEntityGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }
    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        constructor(container: JQuery);
        get_categoryID(): any;
        set_categoryID(value: any): void;
    }
    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
    }
    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
        get_categoryID(): any;
        set_categoryID(value: any): void;
    }
    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }
    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }
    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
    }
    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }
    class MultiColumnDialog extends Northwind.OrderDialog {
    }
    class MultiColumnGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
    class MultiColumnResponsiveDialog extends Northwind.OrderDialog {
    }
    class MultiColumnResponsiveGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
    class OrderBulkAction extends BulkServiceAction {
    }
    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<any, any> {
        constructor(hidden: JQuery, opt: Serenity.LookupEditorOptions);
    }
    class ResponsiveDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
    }
    class ResponsiveGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        constructor(container: JQuery);
    }
}
declare namespace Serene.Common {
    class ExcelExportHelper {
        static createToolButton(grid: Serenity.IDataGrid, service: string, onViewSubmit: () => boolean, title?: string): Serenity.ToolButton;
    }
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> {
        constructor(container: JQuery);
        id(entity: any): any;
        save(opt: Serenity.ServiceOptions<any>, callback: (p1: Serenity.ServiceResponse) => void): void;
        deleteEntity(id: number): boolean;
        validateEntity(row: any, id: any): boolean;
        setEntities(items: any[]): void;
        getNewEntity(): any;
        getEditValue(property: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, property: Serenity.PropertyItem): void;
        get_value(): any[];
        set_value(value: any[]): void;
    }
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        get_onSave(): (p1: Serenity.ServiceOptions<any>, p2: (p1: Serenity.ServiceResponse) => void) => void;
        set_onSave(value: (p1: Serenity.ServiceOptions<any>, p2: (p1: Serenity.ServiceResponse) => void) => void): void;
        get_onDelete(): (p1: Serenity.ServiceOptions<Serenity.DeleteResponse>, p2: (p1: Serenity.DeleteResponse) => void) => void;
        set_onDelete(value: (p1: Serenity.ServiceOptions<Serenity.DeleteResponse>, p2: (p1: Serenity.DeleteResponse) => void) => void): void;
    }
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
    class ReportHelper {
        static createRenderButton(reportKey: string, title?: string, cssClass?: string, extension?: string, options?: () => any): Serenity.ToolButton;
    }
    class SidebarSearch extends Serenity.Widget<any> {
        constructor(input: JQuery, menuUL: JQuery);
    }
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
    }
}
declare namespace Serene.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        constructor(container: JQuery);
    }
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        constructor(container: JQuery);
    }
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        constructor(container: JQuery);
    }
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        constructor(container: JQuery);
    }
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        constructor(container: JQuery);
    }
}
declare namespace Serene.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
    }
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        constructor(container: JQuery);
    }
    class CustomerCustomerDemoDialog extends Serenity.EntityDialog<CustomerCustomerDemoRow, any> {
    }
    class CustomerCustomerDemoGrid extends Serenity.EntityGrid<CustomerCustomerDemoRow, any> {
        constructor(container: JQuery);
    }
    class CustomerDemographicDialog extends Serenity.EntityDialog<CustomerDemographicRow, any> {
    }
    class CustomerDemographicGrid extends Serenity.EntityGrid<CustomerDemographicRow, any> {
        constructor(container: JQuery);
    }
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
    }
    class CustomerEditor extends Serenity.LookupEditorBase<any, any> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
    }
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        constructor(container: JQuery);
    }
    class CustomerOrderDialog extends OrderDialog {
    }
    class CustomerOrdersGrid extends OrderGrid {
        constructor(container: JQuery);
        get_customerID(): string;
        set_customerID(value: string): void;
    }
    class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
    }
    class EmployeeFormatter {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        get_genderProperty(): string;
        set_genderProperty(value: string): void;
    }
    class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        constructor(container: JQuery);
    }
    class EmployeeTerritoryDialog extends Serenity.EntityDialog<EmployeeTerritoryRow, any> {
    }
    class EmployeeTerritoryGrid extends Serenity.EntityGrid<EmployeeTerritoryRow, any> {
        constructor(container: JQuery);
    }
    class FreightFormatter {
        format(ctx: Slick.FormatterContext): string;
    }
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        okClick: () => void;
        get_text(): string;
        set_text(value: string): void;
    }
    class NotesEditor extends Serenity.TemplatedWidget<any> {
        constructor(container: JQuery);
        getEditValue(property: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, property: Serenity.PropertyItem): void;
        get_value(): NoteRow[];
        set_value(value: NoteRow[]): void;
        get_isDirty(): boolean;
        set_isDirty(value: boolean): void;
        get_onChange(): () => void;
        set_onChange(value: () => void): void;
    }
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        form: OrderDetailForm;
    }
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        constructor(container: JQuery);
    }
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        form: OrderForm;
    }
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        constructor(container: JQuery);
        get_shippingState(): any;
        set_shippingState(value: any): void;
        get_customerFilter(): CustomerEditor;
    }
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        formatValue(): void;
        getFormattedValue(): string;
        get_multiple(): boolean;
        set_multiple(value: boolean): void;
        get_value(): string;
        set_value(value: string): void;
    }
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
    }
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        constructor(container: JQuery);
    }
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
    }
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        constructor(container: JQuery);
    }
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
    }
    class ShipperFormatter {
        format(ctx: Slick.FormatterContext): string;
    }
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        constructor(container: JQuery);
    }
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
    }
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        constructor(container: JQuery);
    }
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
    }
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        constructor(container: JQuery);
    }
}
declare namespace Serenity {
    class HtmlBasicContentEditor extends HtmlContentEditor {
        constructor(textArea: JQuery, opt: HtmlContentEditorOptions);
    }
}
