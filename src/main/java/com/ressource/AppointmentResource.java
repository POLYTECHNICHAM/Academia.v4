package com.ressource;


import com.Entities.Appointment;
import com.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;

////import org.springframework.security.access.annotation.Secured;

@RestController

public class AppointmentResource {

    @Autowired
    private AppointmentService appointmentService;

  @GetMapping("/appointment")
  public List<Appointment> getAppointment(){
    return appointmentService.getAppointment();
  }

  @GetMapping("/appointment/team/{idTeam}")
  public List<Appointment> getAppointmentByTeamId(@PathVariable Integer idTeam){
    return appointmentService.getAppointmentByTeamId(idTeam);
  }


  @PostMapping("/appointment")
    public Appointment postAppointment(@RequestBody Appointment appointment) throws URISyntaxException {

       return appointmentService.postAppointment(appointment);

    }

    @PutMapping("/appointment")
    public Appointment updateAppointment (@RequestBody Appointment appointment) throws URISyntaxException{
        return appointmentService.updateAppointment(appointment);
    }

    @DeleteMapping("/appointment/{id}")
    public void deleteAppointment(@PathVariable Integer id) throws URISyntaxException {
        appointmentService.deleteAppointment(id);
    }


}
