package swing;

import javax.swing.JFrame;
import javax.swing.JTable;
import javax.swing.JScrollPane;

public class TablaTutorial extends JFrame {

  String[] columnas = { "Nombre", "Apellido", "Edad" };
  Object[][] datos = {
      { "Juan", "Perez", 25 },
      { "Maria", "Gomez", 30 },
      { "Pedro", "Garcia", 35 },
      { "Jose", "Luis", 52 },
      { "Aitor", "Diaz", 21 }
  };

  public TablaTutorial() {
    JFrame form = new JFrame("Tabla Tutorial");
    form.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    form.setSize(400, 300);

    // Crear la tabla con los datos y columnas
    JTable tabla = new JTable(datos, columnas);

    // Agregar la tabla a un JScrollPane para que tenga barra de desplazamiento
    JScrollPane scroll = new JScrollPane(tabla);

    // Agregar el JScrollPane al formulario
    form.add(scroll);

    form.setVisible(true);
  }

  public static void main(String[] args) {
    new TablaTutorial();
  }

}
