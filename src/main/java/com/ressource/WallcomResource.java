package com.ressource;


import com.Entities.Wallcom;
import com.service.WallcomService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;

//import org.springframework.security.access.annotation.Secured;

@RestController
@RequestMapping("/java")
public class WallcomResource {
    private WallcomService wallcomService;

    /**
     * POST  /wallcom  : Creates a new wallcom.
     * <p>
     * Creates a new wallcom
     * </p>
     *
     * @param wallcom the wallcom to create
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/wallcoms")
    //@Secured(AuthoritiesConstants.ADMIN) /*Qui on veut*/
    public Wallcom createWallcom(@PathVariable Wallcom wallcom) throws URISyntaxException {

        return wallcomService.createWallcom(wallcom);

    }

    /**
     * PUT  /wallcom  : Update a wallcom.
     * <p>
     * Updates a wallcom
     * </p>
     *
     * @param wallcom the wallcom to update
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/wallcoms")
    //@Secured(AuthoritiesConstants.ADMIN) /*Qui on veut*/
    public ResponseEntity<Wallcom> updateWallcom(@PathVariable Wallcom wallcom) throws URISyntaxException {
        Wallcom wallcomUpdate;
        wallcomUpdate=wallcomService.updateWallcom(wallcom);
        if(wallcom==wallcomUpdate){
            return ResponseEntity.ok().body(wallcomUpdate);
        }else {
            return ResponseEntity.badRequest().body(null); //A changer, il faut créer divers réponses pas le temps
        }


    }

    /**
     * DELETE /wallcoms/:id : delete the wallcoms with id.
     *
     * @param wallcom to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/wallcoms")
    //@Secured(AuthoritiesConstants.ADMIN) /*Qui on veut*/
    public ResponseEntity<Void> deleteWallcom(@PathVariable Wallcom wallcom) throws URISyntaxException {
        Wallcom wallcomUpdate;
        wallcomService.deleteWallcom(wallcom);
        return ResponseEntity.ok().build();
    }


}
