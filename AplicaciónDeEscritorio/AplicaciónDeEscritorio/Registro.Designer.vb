<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Registro
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(Registro))
        Me.btnProcesar = New System.Windows.Forms.Button()
        Me.inputApellido = New System.Windows.Forms.TextBox()
        Me.inputNombre = New System.Windows.Forms.TextBox()
        Me.titRegistro = New System.Windows.Forms.Label()
        Me.TextBox1 = New System.Windows.Forms.TextBox()
        Me.TextBox2 = New System.Windows.Forms.TextBox()
        Me.titNosbey = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'btnProcesar
        '
        Me.btnProcesar.Location = New System.Drawing.Point(81, 219)
        Me.btnProcesar.Name = "btnProcesar"
        Me.btnProcesar.Size = New System.Drawing.Size(75, 23)
        Me.btnProcesar.TabIndex = 7
        Me.btnProcesar.Text = "Procesar"
        Me.btnProcesar.UseVisualStyleBackColor = True
        '
        'inputApellido
        '
        Me.inputApellido.Location = New System.Drawing.Point(37, 141)
        Me.inputApellido.MaxLength = 30
        Me.inputApellido.Name = "inputApellido"
        Me.inputApellido.Size = New System.Drawing.Size(163, 20)
        Me.inputApellido.TabIndex = 6
        '
        'inputNombre
        '
        Me.inputNombre.Location = New System.Drawing.Point(37, 115)
        Me.inputNombre.MaxLength = 30
        Me.inputNombre.Name = "inputNombre"
        Me.inputNombre.Size = New System.Drawing.Size(163, 20)
        Me.inputNombre.TabIndex = 5
        '
        'titRegistro
        '
        Me.titRegistro.AutoSize = True
        Me.titRegistro.Location = New System.Drawing.Point(3, 85)
        Me.titRegistro.Name = "titRegistro"
        Me.titRegistro.Size = New System.Drawing.Size(230, 13)
        Me.titRegistro.TabIndex = 4
        Me.titRegistro.Text = "Completa los siguientes campos para registrarte"
        '
        'TextBox1
        '
        Me.TextBox1.Location = New System.Drawing.Point(37, 193)
        Me.TextBox1.MaxLength = 30
        Me.TextBox1.Name = "TextBox1"
        Me.TextBox1.Size = New System.Drawing.Size(163, 20)
        Me.TextBox1.TabIndex = 9
        '
        'TextBox2
        '
        Me.TextBox2.Location = New System.Drawing.Point(37, 167)
        Me.TextBox2.MaxLength = 30
        Me.TextBox2.Name = "TextBox2"
        Me.TextBox2.Size = New System.Drawing.Size(163, 20)
        Me.TextBox2.TabIndex = 8
        '
        'titNosbey
        '
        Me.titNosbey.BackColor = System.Drawing.Color.Transparent
        Me.titNosbey.BackgroundImage = CType(resources.GetObject("titNosbey.BackgroundImage"), System.Drawing.Image)
        Me.titNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.titNosbey.Enabled = False
        Me.titNosbey.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.titNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.titNosbey.Location = New System.Drawing.Point(15, 10)
        Me.titNosbey.Name = "titNosbey"
        Me.titNosbey.Size = New System.Drawing.Size(206, 55)
        Me.titNosbey.TabIndex = 10
        Me.titNosbey.UseVisualStyleBackColor = False
        '
        'Registro
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.titNosbey)
        Me.Controls.Add(Me.TextBox1)
        Me.Controls.Add(Me.TextBox2)
        Me.Controls.Add(Me.btnProcesar)
        Me.Controls.Add(Me.inputApellido)
        Me.Controls.Add(Me.inputNombre)
        Me.Controls.Add(Me.titRegistro)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "Registro"
        Me.Text = "Registro"
        Me.WindowState = System.Windows.Forms.FormWindowState.Maximized
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btnProcesar As Button
    Friend WithEvents inputApellido As TextBox
    Friend WithEvents inputNombre As TextBox
    Friend WithEvents titRegistro As Label
    Friend WithEvents TextBox1 As TextBox
    Friend WithEvents TextBox2 As TextBox
    Friend WithEvents titNosbey As Button
End Class
