/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSearchParams } from "react-router-dom";
import { Paginator } from "primereact/paginator";
import { useEffect } from "react";
import useDataQuery from "../hooks/useDataQuery";
import { getUsers } from "../dataProvider/users";


const AppTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);
  const pageSize = Number(searchParams.get("page_size") ?? 10);
  const first = (page - 1) * pageSize;

  const onPageChange = (paginator: any) => {
    setSearchParams({ page: paginator.page + 1, page_size: paginator.rows });
  };

  // Handle setting the initial queries if not present
  // Analog to a normal redirect with all params
  // Adds page and page_size if not in URL
  useEffect(() => {
    const currentQuery: any = Object.fromEntries(searchParams);
    let isDurty = false;
    if (!("page" in currentQuery)) {
      currentQuery.page = page;
      isDurty = true;
    }
    if (!("page_size" in currentQuery)) {
      currentQuery.page_size = pageSize;
      isDurty = true;
    }
    if (isDurty) {
      setSearchParams(currentQuery);
      console.log("reloading", currentQuery);
    }
  }, []);

  const { data, isLoading } = useDataQuery(getUsers, "usersTable");

  return (
    <>
      <DataTable value={data?.users ?? []} tableStyle={{ minWidth: "50rem" }} loading={isLoading}>
        <Column field="id" header="ID"></Column>
        <Column field="firstName" header="First name"></Column>
        <Column field="lastName" header="Last name"></Column>
        <Column field="username" header="Username"></Column>
        <Column field="birthDate" header="Birth date"></Column>
        <Column field="address.city" header="City"></Column>
      </DataTable>

      <Paginator
        first={first}
        rows={pageSize}
        totalRecords={120}
        rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default AppTable;
