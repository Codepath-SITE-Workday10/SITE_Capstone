import * as React from "react";
import { useState } from "react";
import "./Dashboard.css";

export default function Dashboard( { isOpen } ) {
  console.log("Dashboard isOpen below")
  console.log(isOpen)
  return (
    <div className="dashboard closed">
      <div className="projects-table">
        <div className="header-row">
          <h>YOUR PROJECTS</h>
          <h>Search Hereee</h>
          
        </div>
        <div className="table">
          <div className="table-header-row">
            <h>PROJECT NAME</h>
            <h>DESCRIPTION</h>
            <h>COLLABORATORS</h>
          </div>
          <div className="table-content-row">

          </div>
        </div>
      </div>

      <div className="ticket-statistics">Ticket Statistics</div>

      <div className="teams-table">Teams Table</div>
    </div>
    
  )
}
