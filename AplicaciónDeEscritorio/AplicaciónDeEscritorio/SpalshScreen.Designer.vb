<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class SpalshScreen
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(SpalshScreen))
        Me.titNosbey = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'titNosbey
        '
        Me.titNosbey.BackgroundImage = CType(resources.GetObject("titNosbey.BackgroundImage"), System.Drawing.Image)
        Me.titNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.titNosbey.Enabled = False
        Me.titNosbey.FlatAppearance.BorderSize = 0
        Me.titNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.titNosbey.Location = New System.Drawing.Point(445, 270)
        Me.titNosbey.Name = "titNosbey"
        Me.titNosbey.Size = New System.Drawing.Size(445, 225)
        Me.titNosbey.TabIndex = 0
        Me.titNosbey.UseVisualStyleBackColor = True
        '
        'Spalsh
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1280, 720)
        Me.Controls.Add(Me.titNosbey)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Name = "Spalsh"
        Me.Text = "Spalsh"
        Me.WindowState = System.Windows.Forms.FormWindowState.Maximized
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents titNosbey As Button
End Class
