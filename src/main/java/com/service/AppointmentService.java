package com.service;

import com.Entities.Appointment;
import com.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public List<Appointment> getAppointment()
    {
        List<Appointment> appointmentsList = new ArrayList<>();
        appointmentRepository.findAll().forEach(appointmentsList::add);
        return appointmentsList;
    }

    public List<Appointment> getAppointmentByTeamId(int idTeam){

      List<Appointment> appointmentsList = new ArrayList<>();
      appointmentRepository.findAllByTeamByTeamId_Id(idTeam).forEach(appointmentsList::add);
      return appointmentsList;
    }

    public Appointment postAppointment(Appointment appointment)
    {
        return appointmentRepository.save(appointment);
    }

    public Appointment updateAppointment(Appointment appointment)
    {
        return appointmentRepository.save(appointment);
    }

    public void deleteAppointment(Integer id){

        appointmentRepository.delete(id);
    }
}
