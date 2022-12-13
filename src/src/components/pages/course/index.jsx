//router eklentilerini sildim, course approval page comment outlu oldugu icin
// import { Box, Typography, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { mockDataCourse} from "./src/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

// const CourseApproval = () => {
//     const columns = [];
//   // const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   return (
//     <Box m="20px">
//       <Header title="Course Approval" subtitle="Manage your course approval requests." />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             // color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             // backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             // backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             // backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             // color: `${colors.greenAccent[200]} !important`,
//           },
//         }}
//       >
//         <DataGrid checkboxSelection rows={mockDataCourse} columns={columns} />
//       </Box>
//     </Box>
//   );
// };

// export default CourseApproval;;