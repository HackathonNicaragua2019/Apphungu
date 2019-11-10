package com.wantasbaya.uhung_aprendamos_miskito;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.graphics.Typeface;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.view.View;
import android.view.WindowManager;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.google.firebase.FirebaseApp;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.wantasbaya.uhung_aprendamos_miskito.Models.palabras;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class traductor extends AppCompatActivity {

    TextView lema;
    TextView entrada, traduccion;
    ImageView mic;
    FirebaseDatabase firebaseDatabase;
    DatabaseReference databaseReference;

    private List<palabras> listapalabras = new ArrayList<palabras>();
    ArrayAdapter<palabras> arrayAdapterPalabra;

    private static final int REC_CODE_SPEECH_INPUT = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_traductor);

        entrada = (TextView) findViewById(R.id.entrada);
        mic = (ImageView) findViewById(R.id.btn_mic);
        traduccion = (TextView) findViewById(R.id.traduccion);

        inciarfirebase();

        consultar();

        this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        getSupportActionBar().hide();
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        lema = (TextView)findViewById(R.id.traductor);

        Typeface custom_font = Typeface.createFromAsset(getAssets(),  "fonts/PhosphateSolid.ttf");

        lema.setTypeface(custom_font);


        mic.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                iniciarVoz();
            }
        });




    }


    public void consultar(){
        databaseReference.child("Traductor").addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                for(DataSnapshot objectSnapshot : dataSnapshot.getChildren()){

                    palabras pala = objectSnapshot.getValue(palabras.class);
                    listapalabras.add(pala);

                    arrayAdapterPalabra = new ArrayAdapter<>(traductor.this, android.R.layout.simple_list_item_1,listapalabras);

                    traduccion.setText(arrayAdapterPalabra.getItem(1).toString());


                }
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        });
    }


    private void iniciarVoz(){

        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);

        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, Locale.getDefault());
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT,"Hola, dime algo");

        try {
            startActivityForResult(intent,REC_CODE_SPEECH_INPUT);
        }catch (ActivityNotFoundException e){

        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        switch (requestCode){
            case REC_CODE_SPEECH_INPUT:{
                if (resultCode == RESULT_OK && null != data){
                    ArrayList<String> result = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                    entrada.setText(result.get(0));
                }
                break;
            }
        }
    }

    public void inciarfirebase(){
        FirebaseApp.initializeApp(this);
        firebaseDatabase = FirebaseDatabase.getInstance();
        databaseReference = firebaseDatabase.getReference();
    }
}
