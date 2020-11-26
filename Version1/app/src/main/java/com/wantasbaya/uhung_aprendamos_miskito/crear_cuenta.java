package com.wantasbaya.uhung_aprendamos_miskito;

import android.app.ProgressDialog;
import android.content.pm.ActivityInfo;
import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.tabs.TabLayout;

import androidx.viewpager.widget.ViewPager;
import androidx.appcompat.app.AppCompatActivity;

import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioGroup;
import android.widget.Toast;

import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.wantasbaya.uhung_aprendamos_miskito.Models.persona;
import com.wantasbaya.uhung_aprendamos_miskito.ui.main.SectionsPagerAdapter;

import java.util.UUID;

public class crear_cuenta extends AppCompatActivity implements pestana1.OnFragmentInteractionListener,pestana2.OnFragmentInteractionListener,pestana3.OnFragmentInteractionListener{
    public EditText nombre,apellido, correo, contra1, contra2, departamento, municipio, celular;
    private RadioGroup sexo, nivelaca;
    private Button confirmar;
    private ProgressDialog progressDialog;
    FirebaseDatabase firebaseDatabase;
    DatabaseReference databaseReference;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_crear_cuenta);

        this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);



        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);





        //Referenciamos los views de nuestra activity
        nombre = (EditText) findViewById(R.id.nombre);
        apellido = (EditText) findViewById(R.id.apellido);
        correo = (EditText) findViewById(R.id.correo);
        contra1= (EditText) findViewById(R.id.contra1);
        contra2= (EditText) findViewById(R.id.contra2);
        departamento = (EditText) findViewById(R.id.departamento);
        municipio = (EditText) findViewById(R.id.municipio);
        celular = (EditText) findViewById(R.id.celular);

        confirmar = (Button) findViewById(R.id.crear_cuenta);

        progressDialog = new ProgressDialog(this);

        inciarfirebase();


     /*   confirmar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                RegistrarUsuario();
            }
        });
*/



        SectionsPagerAdapter sectionsPagerAdapter = new SectionsPagerAdapter(this, getSupportFragmentManager());
        ViewPager viewPager = findViewById(R.id.view_pager);
        viewPager.setAdapter(sectionsPagerAdapter);
        TabLayout tabs = findViewById(R.id.tabs);
        tabs.setupWithViewPager(viewPager);

    }

public void metodo(View v){



}

    public void RegistrarUsuario() {


        String nomb = nombre.getText().toString();
        String ape = apellido.getText().toString();
        String cor = correo.getText().toString();
        String con1 = contra1.getText().toString();
        String con2 = contra2.getText().toString();
        String dept = departamento.getText().toString();
        String muni = municipio.getText().toString();
        String cel= celular.getText().toString();



        if (nomb.equals("")||ape.equals("")||cor.equals("")||con1.equals("")||con2.equals("")||dept.equals("")||muni.equals("")||cel.equals("")){
            Toast toast1 = Toast.makeText(getApplicationContext(), "Existen campos vacios", Toast.LENGTH_SHORT);
            if (nomb.equals("")){

                nombre.setError("Required");

                toast1.setGravity(Gravity.CENTER, 0, 0);
                toast1.show();

            }

            if(ape.equals("")){
                apellido.setError("Required");
                toast1.setGravity(Gravity.CENTER, 0, 0);
                toast1.show();
            }

            if(cor.equals("")){
                correo.setError("Required");
                toast1.setGravity(Gravity.CENTER, 0, 0);
                toast1.show();
            }
            if(con1.equals("")){
                contra1.setError("Required");
                toast1.setGravity(Gravity.CENTER, 0, 0);
                toast1.show();
            }
            if(con2.equals("")){
                contra2.setError("Required");
                toast1.setGravity(Gravity.CENTER, 0, 0);
                toast1.show();
            }
            if(dept.equals("")){
                departamento.setError("Required");
                toast1.setGravity(Gravity.CENTER, 0, 0);
                toast1.show();
            }
            if(muni.equals("")){
                municipio.setError("Required");
                toast1.setGravity(Gravity.CENTER, 0, 0);
                toast1.show();
            }
            if(cel.equals("")){
                celular.setError("Required");
                toast1.setGravity(Gravity.CENTER, 0, 0);
                toast1.show();
            }
        }else{

            persona p = new persona();

            p.setUid(UUID.randomUUID().toString());
            p.setNombre(nomb);
            p.setApellido(ape);
            p.setCorreo(cor);
            p.setDepartamento(dept);
            p.setMunicipio(muni);
            p.setCelular(cel);

            databaseReference.child("usuario").child(p.getUid()).setValue(p);


        }
    }



    public void inciarfirebase(){
        FirebaseApp.initializeApp(this);
        firebaseDatabase = FirebaseDatabase.getInstance();
        databaseReference = firebaseDatabase.getReference();
    }
}