package swing;

public class PracticaForm extends javax.swing.JFrame {

  public PracticaForm() {
    // Esto establece el layout del formulario
    // en null para poder posicionar los controles manualmente con setBounds
    setLayout(null);
  }

  public static void main(String[] args) {
    // Crea una instancia de la clase PracticaForm
    PracticaForm form = new PracticaForm();

    // Establecer el tamaño del formulario
    form.setBounds(10, 10, 400, 300);

    // Establecer la visibilidad del formulario
    form.setVisible(true);

    // Establecer la operación de cierre del formulario
    form.setDefaultCloseOperation(EXIT_ON_CLOSE);

    // Establecer el título del formulario
    form.setTitle("Practica Formulario");
  }

}
